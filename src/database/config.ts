import 'dotenv/config';
import mogoose from 'mongoose';

const connectionDataBase = async () => {
    const uri = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOSTNAME}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin`;

    try {
        mogoose.connect(uri);
        console.log('Conectado ao MongoDB!');
    } catch (error) {
        console.error('Erro de conexão com o MongoDB:', error);
    }
};

export default connectionDataBase;