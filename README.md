This project has 2 modules. 

The **api** module is responsible for turning an input numerical string into a list of possible words.

The **web** module is a graphical interface to better visualize that. The **web** module runs on port **3000** by default, you can change that by using the **--port** flag given to the **webpack-dev-server**. 

The **api** module runs on port **80**, you can change that but you may not be be able to use the project (CORS won't work if the api is running in a port that is not 80 , 8080 or 443)

### Set Up


#### With docker & docker-compose
Run `docker-compose build`
Run `docker-compose run web npm install`
Run `docker-compose run api npm install`
Run `docker-compose up`

Go to the browser and open `localhost:3000`!
#### Without docker

1. Build the word dictionary tree.
  * Create a new dir: `mkdir preprocess`
  * Save the word list : `curl https://raw.githubusercontent.com/dwyl/english-words/master/words.txt -o words.txt`
  * Create a npm project to run the pre-process script: `npm init -y && npm install --save lodash`
  * Copy the **wordPreProcessor.js** script from `api/scripts` to the directory you have just created
  * Run the script(you should change the `basePath` var inside the script accordingly)
2. Run the api 
  * Run `npm install`
  * Run `node index.js --data path_to_dictionary_json`
3. Run the web project
  * Run `npm install`
  * Run `npm install -g webpack-dev-server`
  * Run `webpack-dev-server --config webpack.config.js --hot --inline --progress --colors --host 0.0.0.0 --port 3000`
4. Access localhost:3000

### Usage

![example](https://raw.githubusercontent.com/cmcmteixeira/predictive-test/master/example.png)

Just press the keys and the word possibilities will be presented on the left. Once the word you want is shown on the left just click it and it will be added the central input.
In the left you can see the current number sequence. 

Delete deletes the last written word.
