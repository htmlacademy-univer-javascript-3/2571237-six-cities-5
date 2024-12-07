import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppDispatch, State } from '../types/app-state';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
