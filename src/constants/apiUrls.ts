export const API_URLS = {
  AUTH: {
    LOGIN: '/api/login',
    LOGOUT: '/api/logout',
    SIGNUP: '/api/signup',
    CHECK_AUTH: '/api/auth-user',
  },
  USER: {
    GET_USERS: '/api/users/get-users',
    GET_CURRENT_CONNECTED_USERS: '/api/users/online-users',
    GET_USER_INFO: (userId: string) => `/api/users/${userId}`,
    UPDATE_PROFILE_IMAGE: '/api/users/upload-photo',
    UPDATE_COVER_IMAGE: '/api/users/upload-photo',
  },
  SETTING: {
    UPDATE_MY_INFO: '/api/settings/update-user',
    UPDATE_MY_PASSWORD: '/api/settings/update-password',
  },
  CHANNEL: {
    GET_CHANNELS: '/api/channels',
    GET_CHANNEL_INFO: (channelName: string) => `/api/channel/${channelName}`,
  },
  POST: {
    GET_POSTS_OF_SPECIFIC_CHANNEL: (channelId: string) =>
      `/api/posts/channel/${channelId}`,
    GET_POSTS_OF_SPECIFIC_USER: (authorId: string) =>
      `/api/posts/author/${authorId}`,
    CREATE_POST_ON_SPECIFIC_CHANNEL: '/api/posts/create',
    GET_POST_DETAIL: (postId: string) => `/api/posts/${postId}`,
    UPDATE_POST: '/api/posts/update',
    DELETE_POST: '/api/posts/delete',
  },
  LIKE: {
    CREATE_LIKE: '/api/likes/create',
    DELETE_LIKE: '/api/likes/delete',
  },
  COMMENT: {
    CREATE_COMMENT: '/api/comments/create',
    DELETE_COMMENT: '/api/comments/delete',
  },
  NOTIFICATION: {
    GET_NOTIFICATIONS: '/api/notifications',
    UPDATE_NOTIFICATION: '/api/notifications/seen',
    CREATE_NOTIFICATION: '/api/notifications/create',
  },
  FOLLOW: {
    CREATE_FOLLOW: '/api/follow/create',
    DELETE_FOLLOW: '/api/follow/delete',
  },
  MESSAGE: {
    GET_MY_MESSAGES: '/api/messages/conversations',
    GET_MESSAGES_WITH_SPECIFIC_USER: '/api/messages',
    CREATE_MESSAGE: '/api/messages/create',
    UPDATE_MESSAGE: '/api/messages/update-seen',
  },
  SEARCH: {
    GET_USERS_BY_QUERY: (query: string) => `/api/search/users/${query}`,
    GET_RESULTS_BY_QUERY: (query: string) => `/api/search/all/${query}`,
  },
};
