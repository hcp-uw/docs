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

### Setting up a virtual environment

After you have your python installed, the next step is to make a virtual environment. First, create a new directory where you want your project to be. After creating the directory, open your ide of choice from the directory. We use virtual environments to make sure there are no conflicts between package versions. If this is the only python version you have installed, you can just do

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

Now that we have our environment setup, we should download the required packages for this demonstration.

```bash
pip install torch
```

This will download the PyTorch package and all the required dependencies.

### Misc setup

There are couple more things we should do before we start training, namely we have to get the dataset and write the training code! Thankfully, Andrej Karpathy has already done both. Download [[this]](https://raw.githubusercontent.com/karpathy/char-rnn/master/data/tinyshakespeare/input.txt) text file and rename the downloaded file as ```input.txt```.