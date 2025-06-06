import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// Hooks
import { HooksApp } from './HooksApp';
import { CounterApp } from './01-useState/CounterApp';
import { CounterWidthCustomHook } from './01-useState/CounterWidthCustomHook';
import { SimpleForm } from './02-useEffect/SimpleForm';
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
import { FocusScreen } from './04-useRef/FocusScreen';
import { Layout } from './05-useLayoutEffect/Layout';
import { Memorize } from './06-memos/Memorize';
import { MemoHook } from './06-memos/MemoHook';
import { CallbackHook } from './06-memos/CallbackHook';
import { Padre } from './07-tarea-memo/Padre';
import './08-useReducer/intro-reducer';
import { TodoApp } from './08-useReducer/TodoApp';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HooksApp />

    <CounterApp />

    <CounterWidthCustomHook />

    <SimpleForm />

    <FormWithCustomHook />

    <MultipleCustomHooks />

    <FocusScreen />

    <Layout />

    <Memorize />

    <MemoHook />

    <CallbackHook />

    <Padre />

    <TodoApp />
  </StrictMode>
);
