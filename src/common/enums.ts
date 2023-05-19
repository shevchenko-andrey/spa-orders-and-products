export const enum UserRoles {
  USER = "USER",
  ADMIN = "ADMIN",
  GUEST = "GUEST",
}

export const enum DateFormats {
  CLOCK_FORMAT = "HH:mm",
  FULL_DATE = "dd MMM, yyyy",
}

export const enum RequestStatus {
  INIT = "INIT",
  LOADING = "LOADING",
  ERROR = "ERROR",
  SUCCESS = "SUCCESS",
}

export const enum ResponseStatus {
  OK = 200,
  NO_CONTENT = 201,
  BED_REQUEST = 400,
  UNAUTHORIZE = 401,
  NOT_FOUND = 404,
  SERVER_ERROR = 500,
}
