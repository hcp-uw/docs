---
sidebar_position: 1
---

# Local

## Setup

For our training example on a local machine, we will be using the nanoGPT [(https://github.com/karpathy/nanoGPT)](https://github.com/karpathy/nanoGPT) model by [Andrej Karpathy](https://karpathy.ai/) to explain how it works at a basic level. You can follow this step by step video tutorial by non other than Andrej Karpathy [here](https://www.youtube.com/watch?v=kCc8FmEb1nY) for an in depth understanding of how this all works or you can read an article by [New York Times](https://www.nytimes.com/interactive/2023/04/26/upshot/gpt-from-scratch.html) (or access a PDF of it [here](https://courses.cs.washington.edu/courses/cse473/23sp/uwnetid/lit/Let_Us_GPT.pdf)).

### Installing Python

First, we have to make sure Python is installed. While the latest python version is Python 3.12, we need Python 3.10. This is because Python 3.10 is the latest python version that supports an important machine learning package [PyTorch](https://pytorch.org/). If you have a lower version python such as Python 3.9 or Python 3.8 it should be fine but will not work for older versions.

#### Windows

For most machines, make sure to download Windows installed (64-bit) version for Python 3.10.13 [[here]](https://www.python.org/downloads/windows/)

#### macOS

For the macOS version, you should download the latest Python 3.10 version which is 3.10.11 [[here]](https://www.python.org/downloads/macos/)

#### Linux

You have many options for Linux, ...as always. You could either download directly from the package manager like so

```bash
sudo apt install python3.10
```

or build directly from source [[here]](https://www.python.org/downloads/source/)

### Copying Code

Now that we have Python setup, we should access [this](https://github.com/karpathy/ng-video-lecture/tree/master) github repository from Andrej Karpathy to get all the necessary code.

### Setting up a virtual environment

After you have your python installed and repository cloned, the next step is to make a virtual environment. Inside the directory you downloaded, open your ide of choice from the directory. We use virtual environments to make sure there are no conflicts between package versions. If this is the only python version you have installed, you can just do

```bash
python3 -m venv venv
```

or if this doesn't work for some reason also try

```bash
python -m venv venv
```

If you have multiple python versions already installed, you would need to find the location of the executable for the specific python version. So in my case, it would look something like this.

```bash
C:/Python310/python.exe -m venv venv
```

This will create a virtual python environment in the current directory called venv.

To start the virtual envornment simply type ```activate``` in the terminal and you should be placed in the virtual environment if you are in the same directory as the venv folder. If this does not work, make sure your terminal is in the current directory and the venv file is also located in the current directory. You can also try

#### Windows

```bash
.\venv\Scripts\activate
```

#### macOS / Linux

```bash
source venv/bin/activate
```

To exit the virtual environment, simply type ```deactivate``` in the termianl or

#### Windows

```bash
.\venv\Scripts\deactivate
```

#### macOS / Linux

```bash
source venv/bin/deactivate
```

Now that we have our environment setup, we should download the required packages for this demonstration. This part will depend on if you have a dedicated GPU that supports CUDA or not. Go to this [website](https://pytorch.org/) and scroll down until you see the ```install pytorch``` section. Select your options and copy and paste the output inside your virtual environment. This will download the PyTorch package and all the required dependencies.

## Training

To finally start training, go to the ```bigram.py``` file and for our first run make sure to lower the ```max_iters``` parameter from the given 3,000 down to 2,000 for faster results. As you can see from the results, after training for a bit, the model outputs its results. You can mess with the parameters to get better results and you can see the loss go down as the iteration number increases.

### Saving Model

For bigger models you want to train multiple times or cannot train in a single session, it is important to save your work so that later on, you can load the model and start training again.

Pytorch streamlines the process of saving a model by using checkpoints.

```py
import torch

checkpoint = {
    'iter': iter,
    'model_state_dict': m.state_dict(),
    'optimizer_state_dict': optimizer.state_dict(),
    'loss': loss
    #... other parameters you want to keep
}

checkpoint_path = #The path of the checkpoint

torch.save(checkpoint, checkpoint_path)
```

Loading the model is also straightforward

```py
import torch

# Load the checkpoint and create a empty model
loaded_checkpoint = torch.load(checkpoint_path)
model = BigramLanguageModel()

# Basic setup
device = 'cuda' if torch.cuda.is_available() else 'cpu'
m = model.to(device)

# Load the model parameters from checkpoint
m.load_state_dict(loaded_checkpoint['model_state_dict'])

# Create basic optimizer and load from checkpoint
optimizer = torch.optim.AdamW(m.parameters())
optimizer.load_state_dict(loaded_checkpoint['optimizer_state_dict'])

# Get vales
iter = loaded_checkpoint['iter']
loss = loaded_checkpoint['loss']

# Testing to see if model was correctly loaded
print(iter)
print(loss)

context = torch.zeros((1, 1), dtype=torch.long, device=device)
print(decode(m.generate(context, max_new_tokens=2000)[0].tolist()))
```

As you can see saving and loading a model allows you to maintain progess and to train bigger models over time.

To incorporate this into the nanoGPT training model we are using would look something like this,

#### Before

```py
...
for iter in range(max_iters):

    # every once in a while evaluate the loss on train and val sets
    if iter % eval_interval == 0 or iter == max_iters - 1:
        losses = estimate_loss()
        print(f"step {iter}: train loss {losses['train']:.4f}, val loss {losses['val']:.4f}")

    # sample a batch of data
    xb, yb = get_batch('train')

    # evaluate the loss
    logits, loss = model(xb, yb)
    optimizer.zero_grad(set_to_none=True)
    loss.backward()
    optimizer.step()

# generate from the model
context = torch.zeros((1, 1), dtype=torch.long, device=device)
print(decode(m.generate(context, max_new_tokens=2000)[0].tolist()))
```

#### After

```py
...
checkpoint_path = # The path of your checkpoint

for iter in range(max_iters):

    # save a checkpoint every 100 iteration or if we are at the last iteration
    if iter % 1000 == 0 or iter == max_iters - 1:
      checkpoint = {
        'iter': iter,
        'model_state_dict': m.state_dict(),
        'optimizer_state_dict': optimizer.state_dict(),
        'loss': loss
    }
      torch.save(checkpoint, checkpoint_path)

    # every once in a while evaluate the loss on train and val sets
    if iter % eval_interval == 0 or iter == max_iters - 1:
        losses = estimate_loss()
        print(f"step {iter}: train loss {losses['train']:.4f}, val loss {losses['val']:.4f}")

    # sample a batch of data
    xb, yb = get_batch('train')

    # evaluate the loss
    logits, loss = model(xb, yb)
    optimizer.zero_grad(set_to_none=True)
    loss.backward()
    optimizer.step()

# generate from the model
context = torch.zeros((1, 1), dtype=torch.long, device=device)
print(decode(m.generate(context, max_new_tokens=2000)[0].tolist()))
```
