import express from 'express';
import loaders from './loaders';

export async function startRestServer() {

    const app = express();
    await loaders({ app });
    
}