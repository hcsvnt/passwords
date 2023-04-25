import { styled } from './styles/stitches';
import { flex } from './styles/utils';
import Form from './components/Form/Form';

function App() {
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
