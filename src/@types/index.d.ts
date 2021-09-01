declare type RouteSingle = {
  path: string,
  component?: any,
  auth?: boolean ,
  isMenu?: boolean,
  menuName?: string
}

declare type ResponseBase = {
  code: number,
  message?: string,
  success?: boolean,
  [key:string]: any
}