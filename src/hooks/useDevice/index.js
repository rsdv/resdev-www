import { useContext } from 'react';
import DeviceContext from "../../contexts/Device";

const useDeviceContext = () => useContext(DeviceContext)

export default useDeviceContext;
