import type { RootState } from '../../stores/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../stores/mainpageslice'

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}