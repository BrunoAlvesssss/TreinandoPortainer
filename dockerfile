# orimeiro usei a imagem oficial do Node.js como base
FROM node:14

# aqui eu defini diretório de trabalho dentro do container
WORKDIR /app

# copiei o package.json e instale as dependências
COPY package*.json ./
RUN npm install

# copiei o restante do código da aplicação
COPY . .

# mostrei a porta que o servidor usará
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
