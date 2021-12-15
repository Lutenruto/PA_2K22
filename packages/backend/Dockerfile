FROM node:12.18.1
RUN git clone "https://github.com/Lutenruto/PA_2K21_Mongo"
WORKDIR "/PA_2K21_Mongo"
COPY ./front.env .env
RUN npm install
CMD npm start