import React from 'react'
import {Button, Space} from 'antd'
import {GoogleIcon, FacebookIcon, GmailIcon} from "./Icons"

const SignInWith=() =>{
    return(
        <Space direction='vertical' style={{width:'340px'}}>  
            <Button
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '340px',
                height: '40px',
                marginTop: '21px',
                marginBot: '21px',
                alignItems: 'center',
                color: '#303233',
                fontWeight: 'bold',
                borderRadius: '0.5rem',
                border: '1px solid #303233',
                background: '#FFF',
              }}
              icon={<GoogleIcon/>}
            > 
              Continue with Google 
            </Button>

            <Button
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '340px',
                height: '40px',
                marginTop: '21px',
                marginBot: '21px',
                alignItems: 'center',
                color: '#303233',
                fontWeight: 'bold',
                borderRadius: '0.5rem',
                border: '1px solid #303233',
                background: '#FFF',
              }}
              icon={<FacebookIcon/>}
            > 
              Continue with Facebook 
            </Button>

            <Button
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '340px',
                height: '40px',
                marginTop: '21px',
                marginBot: '21px',
                alignItems: 'center',
                color: '#303233',
                fontWeight: 'bold',
                borderRadius: '0.5rem',
                border: '1px solid #303233',
                background: '#FFF',
              }}
              icon={<GmailIcon/>}
            > 
              Continue with Email 
            </Button>
          </Space> 
    )
}

export default SignInWith;