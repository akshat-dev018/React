import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/AppRoutes.jsx'
import {Provider} from 'react-redux'
import { store } from './app/store.jsx'
import {ToastContainer} from "react-toastify"
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();
// ye wo client hai jo cache memory mein sb kuch data pauncha rha hai


createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <AppRoutes/>
            <ToastContainer/>
        </Provider>
    </QueryClientProvider>
)
