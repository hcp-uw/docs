---
sidebar_position: 2
---

# Google Colab

## Setup

For our training example on Google Colab, we will be using the nanoGPT [(https://github.com/karpathy/nanoGPT)](https://github.com/karpathy/nanoGPT) model by [Andrej Karpathy](https://karpathy.ai/) to explain how it works at a basic level. You can follow this step by step video tutorial by non other than Andrej Karpathy [here](https://www.youtube.com/watch?v=kCc8FmEb1nY) for an in depth understanding of how this all works or you can read an article by [New York Times](https://www.nytimes.com/interactive/2023/04/26/upshot/gpt-from-scratch.html) (or access a PDF of it [here](https://courses.cs.washington.edu/courses/cse473/23sp/uwnetid/lit/Let_Us_GPT.pdf)). Since Google Colab is a cloud service, there is no setup required on your part other than having a google account.

## Training

To start, open this [notebook](https://colab.research.google.com/drive/1JMLa53HDuA-i7ZBmqV7ZnA3c_fvtXnx-?usp=sharing#scrollTo=O6medjfRsLD9) in the browser of your choice. Google Colab is a cloud service that allows you to run Jupyter Notebooks online so a lot of things will come easy if you have previous experience with Jupyter Notebooks. After you open this notebook you might see __Cannot save changes__ near the top next to +Code + Text. This is because colab files are stored in google drive and we did not have a copy for us to modify. Click on __Cannot save changes__ and save a copy to drive. Now when you have saved a copy to your drive, take a look at the first cell with the following code.

```bash
# We always start with a dataset to train on. Let's download the tiny shakespeare dataset
!wget https://raw.githubusercontent.com/karpathy/char-rnn/master/data/tinyshakespeare/input.txt
```

You can click the start button the the left of the cell or press [ctrl] + [enter] after you have the cell focused. When you run a cell, google allocates basic resources to run the python code which you can see on the top right with RAM and Disk usage showing. When you run the cell this will download the shakespeare dataset from the web into the storage for the current session. You can check the storage by clicking the files icon on the left sidebar. When trainig a model we want to use a GPU for faster training and you can ask for GPU resource from Colab by clicking the downward arrow by the resource tab with the RAM and Disk usage. Select change runtime type and select GPU and save. This will reset the current session so you will have to download the file again from the first cell. At this point you can read through the cells along with the video provided but for simplifity, scroll down to the last cell in the notebook. When you are connected, you will have access to GPU resource in Colab. For our first run make sure to lower the ```max_iters``` parameter from the given 5,000 down to 2,000 for faster results. A thing to note, Colab already has many of the most common python packages already installed such torch which we are using in this cell. When you hit run, the process starts and the model will output its result after running for a bit.

## Saving Model

For models you want to train multiple times or cannot train in a single session, it is important to save your work so that later on, you can load the model and start training again. Since Colab doesn't automatically save your work, you need to connect to drive and save your session work there. Create a new cell and enter this code.

```py
from google.colab import drive
drive.mount('/content/drive')
```

This will mount your google drive to this session of Colab and you can save your work there which you can see under "drive" in the files tab. In torch, you can save your current model in this way.

```py
import torch

checkpoint = {
    'iter': iter,
    'model_state_dict': m.state_dict(),
    'optimizer_state_dict': optimizer.state_dict(),
    'loss': loss
    #... other parameters you want to keep
}

checkpoint_path = 'drive/MyDrive/Backup/model_checkpoint.pth'

torch.save(checkpoint, checkpoint_path)
```

Of course your checkpoint_path will be different but make sure to save inside the drive. Loading the model is also straightforward,

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

### Before

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

### After

```py
...
checkpoint_path = 'drive/MyDrive/Backup/model_checkpoint.pth'

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