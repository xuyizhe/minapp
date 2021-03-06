// https://mp.weixin.qq.com/debug/wxadoc/dev/api/address.html

export namespace wx {
  namespace chooseAddress {
    type Param = {
      /**
       * 返回用户选择的收货地址信息
       */
      success?: ParamPropSuccess
      /**
       * 接口调用失败的回调函数
       */
      fail?: ParamPropFail
      /**
       * 接口调用结束的回调函数（调用成功、失败都会执行）
       */
      complete?: ParamPropComplete
    }
    /**
     * 返回用户选择的收货地址信息
     */
    type ParamPropSuccess = (res: ParamPropSuccessParam) => any
    type ParamPropSuccessParam = {
      /**
       * 调用结果
       */
      errMsg: string
      /**
       * 收货人姓名
       */
      userName: string
      /**
       * 邮编
       */
      postalCode: string
      /**
       * 国标收货地址第一级地址
       */
      provinceName: string
      /**
       * 国标收货地址第二级地址
       */
      cityName: string
      /**
       * 国标收货地址第三级地址
       */
      countyName: string
      /**
       * 详细收货地址信息
       */
      detailInfo: string
      /**
       * 收货地址国家码
       */
      nationalCode: string
      /**
       * 收货人手机号码
       */
      telNumber: string
    }
    /**
     * 接口调用失败的回调函数
     */
    type ParamPropFail = (err: any) => any
    /**
     * 接口调用结束的回调函数（调用成功、失败都会执行）
     */
    type ParamPropComplete = () => any
  }
  /**
   * @since 1.1.0
   *
   * 调起用户编辑收货地址原生界面，并在编辑完成后返回用户选择的地址。
   *
   * 需要[用户授权](https://mp.weixin.qq.com/debug/wxadoc/dev/api/authorize-index.html) scope.address
   *
   * **示例代码：**
   *
   *     ```javascript
   *     wx.chooseAddress({
   *       success: function (res) {
   *         console.log(res.userName)
   *         console.log(res.postalCode)
   *         console.log(res.provinceName)
   *         console.log(res.cityName)
   *         console.log(res.countyName)
   *         console.log(res.detailInfo)
   *         console.log(res.nationalCode)
   *         console.log(res.telNumber)
   *       }
   *     })
   *     ```
   * @see https://mp.weixin.qq.com/debug/wxadoc/dev/api/address.html#wxchooseaddressobject
   */
  function chooseAddress(OBJECT: chooseAddress.Param): void

}
