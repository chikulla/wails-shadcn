import { useState } from 'react';
import logo from './assets/images/logo-universal.png';
import './App.css';
import { Greet } from "../wailsjs/go/main/App";
import { Button } from './components/ui/button';
import { Layout } from 'lucide-react';
import AppLayout from '@/components/app/app-layout';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { router } from './components/app/app-routes';

function App() {
    const [resultText, setResultText] = useState("Please enter your name below 👇");
    const [name, setName] = useState('');
    const updateName = (e: any) => setName(e.target.value);
    const updateResultText = (result: string) => setResultText(result);

    function greet() {
        Greet(name).then(updateResultText);
    }

    return (
        <AppLayout><RouterProvider router={router} /></AppLayout>
    )
}

export default App
