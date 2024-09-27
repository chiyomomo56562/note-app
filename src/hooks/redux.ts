import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";

// 컴포넌트에서 스토어에 안전하게 접근하기 위한 커스텀 훅

// dispatch함수를 안전하게 사용할 수 있게 해준다.
// 스토어에 액션을 디스패치하는 함수를 반환한다.
// Appdispatch 제네릭 타입을 통해 반환되는 dispath함수가 어던 타입의 액션을 받을 수 있는지 명확하게 지정한다.
// 이를 통해 잘못된 액션을 디스패치하는 것을 방지한다.
export const useAppDispatch = () => useDispatch<AppDispatch>();

// 스토어의 상태를 타입 안전하게 선택할 수 있도록 해줍니다.
// useSelector는 redux에서 제공하는 훅, 스토어의 상태를 선택해 컴포넌트에 전달한다.
// RootState타입을 통해 선택할 수 있는 상태의 타입을 RootState로 제한한다.
// 이를 통해 Ts가 선택하는 상태 값의 타입을 정확하게 추론하고, 잘못된 상태를 선택하는 것을 방지한다.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;