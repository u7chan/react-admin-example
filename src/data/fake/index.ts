import fakeDataProvider from 'ra-data-fakerest'
import { resources } from './resources'

const useLogging = true

export default fakeDataProvider(resources, useLogging)
