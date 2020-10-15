export default class Firebase {
  constructor (config) {
    this.messaging = null
    window.firebase.initializeApp(config)
  }

  /**
  * Notification permissions are required to send a user push messages.
  * Calling this method displays the permission dialog to the user and resolves if the permission is granted.
  * It is not necessary to call this method, as getToken() will do this automatically if required.
  * https://firebase.google.com/docs/reference/js/firebase.messaging.Messaging#requestpermission
  * @returns {Promise}
  */
  requestNotificationPermission () {
    this.messaging = window.firebase.messaging()
    return this.messaging.requestPermission()
  }

  /**
  * Subscribes the messaging instance to push notifications.
  * Returns an FCM registration token that can be used to send push messages to that messaging instance.
  * https://firebase.google.com/docs/reference/js/firebase.messaging.Messaging#gettoken
  * @returns {string} Device token
  */
  getToken () {
    return this.messaging.getToken()
  }
}
