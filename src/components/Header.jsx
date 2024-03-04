import * as React from 'react';
import { AppBar, AppBarSection, AppBarSpacer, Avatar } from '@progress/kendo-react-layout';
import Logo from '../assets/oxeanbits_logo.jpg'

export default function Header() {
    let avatar = Logo;
    return <React.Fragment>
        <AppBar>
            <AppBarSpacer style={{
                width: 4
            }} />

            <AppBarSection>
                <h1 className='title'>Oxeanbits Desafio</h1>
            </AppBarSection>

            <AppBarSpacer style={{
                width: 32
            }} />

            <AppBarSpacer />

            <AppBarSection>
                <span className='k-appbar-separator' />
            </AppBarSection>

            <AppBarSection>
                <Avatar type='image'>
                    <img src={avatar} alt='Oxeanbits Logo' />
                </Avatar>
            </AppBarSection>
        </AppBar>
        <style>{`
            body {
                background: #dfdfdf;
            }
            .title {
                font-size: 18px;
                margin: 0;
            }
            ul {
                font-size: 14px;
                list-style-type: none;
                padding: 0;
                margin: 0;
                display: flex;
            }
            li {
                margin: 0 10px;
            }
            li:hover {
                cursor: pointer;
                color: #84cef1;
            }
            .k-button k-button-md k-rounded-md k-button-solid k-button-solid-base {
                padding: 0;
            }
            .k-badge-container {
                margin-right: 8px;
            }
        `}</style>
    </React.Fragment>;

}