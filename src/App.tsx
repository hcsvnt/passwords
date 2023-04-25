import { styled } from './styles/stitches';
import { flex } from './styles/utils';
import Form from './components/Form/Form';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        console.log('Hello from App.tsx');
        console.log(self.crypto.getRandomValues(new BigUint64Array(10)));
        // const array = new Uint32Array(10);
        // self.crypto.getRandomValues(array);

        // console.log('Your lucky numbers:');
        // for (const num of array) {
        //     console.log(num);
        // }
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
