import React from 'react'

import Layout from '../components/layout'
import Container from '../components/container'

const TTSCRIPTA = `try {window.tenantTurnerSettings = {customer_id: 3144,assigned_to_user_id: null,map: true,default_to_map: false,show_map_and_listings: false,map_height: "600px",map_width: "100%",display_voucher_filter: true,default_sort: "Newest",default_search: "",theme_color: "0d99dd",protocol: window.location.toString().split('://')[0]};} catch (err) { if (console) { console.warn('TT widget error: ' + err); } }`
const TTSCRIPTB = `try {(function () {var w = window;var tt = w.TenantTurner;if (typeof tt !== "function") {var d = document;function l() {var s = d.createElement('script');s.type = 'text/javascript';s.async = true;s.src = (window.tenantTurnerSettings.secure == 'true' ? 'https:' : window.tenantTurnerSettings.protocol == 'https' ? 'https:' : 'http:') + (window.tenantTurnerSettings.env_scripts ? window.tenantTurnerSettings.env_scripts + '/widget/widget.js' : '//app.tenantturner.com/widget/widget.js');var x = d.getElementById('ttWidget');x.parentNode.insertBefore(s, x);}if (w.attachEvent) {w.attachEvent('onload', l);} else {w.addEventListener('load', l, false);}}})()} catch (err) {if(console){console.log('TT widget error: ' + err)}}`

export default class TenantTurnerPage extends React.Component {
  componentDidMount() {
    const scripta = document.createElement('script')
    const scriptb = document.createElement('script')
    scripta.id = 'ttWidget'
    scripta.innerHTML = TTSCRIPTA
    scriptb.innerHTML = TTSCRIPTB
    this.container.appendChild(scripta)
    this.container.appendChild(scriptb)
  }

  render() {
    return (
      <Layout pageTitle="Schedule a Self-Showing">
        <Container>
          <div ref={el => (this.container = el)} />
        </Container>
      </Layout>
    )
  }
}
