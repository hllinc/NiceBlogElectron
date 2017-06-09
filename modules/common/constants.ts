import { Enum } from 'typescript-string-enums'

export const SupportedExt = Enum('png', 'jpg')
export type SupportedExt = Enum<typeof SupportedExt>

export const TaskStatus = Enum('PENDING', 'PROCESSING', 'DONE', 'FAIL')
export type TaskStatus = Enum<typeof TaskStatus>

export const IpcChannel = Enum('FILE_SELECT', 'FILE_SELECTED', 'FILE_ADD', 'OPTIMIZE')
export type IpcChannel = Enum<typeof IpcChannel>

export interface IElectronResponse<T> {
  session: string
  error: string
  result: T
}

export interface IImageFile {
  id: string
  url: string
  size: number
  ext: SupportedExt
  originalName: string
}

export interface IOptimizeOptions {
  color?: number
  quality?: number
}

export interface ITaskItem {
  id: string
  image: IImageFile
  options: IOptimizeOptions
  optimized?: IImageFile
  status: TaskStatus
}

export interface IOptimizeRequest {
  image: IImageFile
  options: IOptimizeOptions
}
