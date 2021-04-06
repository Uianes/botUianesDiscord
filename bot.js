const Discord = require('discord.js')
const sleep = require('system-sleep')

const bot = new Discord.Client()

const token = 'ODI4OTI2OTAwODIyNjA1ODI1.YGwsVQ.SWgP7ESls95jdrQ8kp8djz3BPXA'

    bot.on('message', message => {
        if (message.content === '!fazendinha') {
            message.channel.send(`${message.author}, 
            CANTA JUNTO "BOM DIA TURURUTUTU": https://youtu.be/LQyuCOWYyBU`)
        }
        if (message.content === '!Uianes vem aqui') {
            message.channel.send(`SE EU BAIXAR AÍ NÃO SOBRA NADA!`)
        }
        if (message.content === '!bolsonaro') {
            message.channel.send('FO')
            sleep(50)
            message.channel.send('DA')
            sleep(50)
            message.channel.send('SE')
            sleep(50)
            message.channel.send('VAI TOMA NO CU')
        }
    });
  
bot.login(token)