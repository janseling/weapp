import configparser
config = configparser.ConfigParser()
config.read('config.ini')

def get (section):
  return config[section]

def getAll ():
  return config
