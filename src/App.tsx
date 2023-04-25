import { styled } from './styles/stitches';
import { flex } from './styles/utils';
import Form from './components/Form/Form';
import { useEffect } from 'react';

const characters = {
    lower: 'abcdefghijklmnopqrstuvwxyz',
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+~`|}{[]\\:;?><,./-='
};

function App() {
    useEffect(() => {
        console.log('Hello from App.tsx');
        // console.log(self.crypto.getRandomValues(new Uint16Array(9999)));
        // const array = new Uint32Array(10);
        // self.crypto.getRandomValues(array);

        // console.log('Your lucky numbers:');
        // for (const num of array) {
        //     console.log(num);
        // }

        const length = 128;

        // const randomLower = characters.lower.split('')[Math.floor(Math.random() * characters.lower.length)];
        const combination = [
            ...characters.lower,
            ...characters.upper,
            ...characters.numbers,
            ...characters.symbols
        ];

        function generatePassword(combination: string[], length: number) {
            let password = '';
            for (let index = 0; index < length; index++) {
                password += combination[Math.floor(Math.random() * combination.length)];
            }

            return password;
        }

        console.log(generatePassword(combination, length));
    });

    return (
        <Main>
            <Form />
        </Main>
    );
}

export default App;

const Main = styled('main', {
    height: '100vh',
    ...flex({ flexDirection: 'column', alignItems: 'center' })
});
