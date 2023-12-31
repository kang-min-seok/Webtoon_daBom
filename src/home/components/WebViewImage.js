import React, { memo } from 'react';
import { Dimensions, View } from 'react-native';
import { WebView } from 'react-native-webview';

const WINDOW_HEIGHT = Dimensions.get('window').height;

const ITEM_SIZE = WINDOW_HEIGHT * 0.17;

// 네이버는 웹에서의 접근만 허용하므로 웹뷰 컴포넌트를 활용해서 이미지를 띄움
const WebViewImage = memo(({ imageURL, isDetail, isCommunity }) => {
    const webViewStyles = {
        width: ITEM_SIZE * 0.7,
        height: ITEM_SIZE * 0.9,
        borderRadius: ITEM_SIZE * 0.03,
    };

    const detailWebViewStyles = {
        width: ITEM_SIZE,
        borderRadius: ITEM_SIZE * 0.045,
    };

    const communityWebViewStyles = {
        width: WINDOW_HEIGHT * 0.077,
        height: WINDOW_HEIGHT * 0.1,
        borderRadius: WINDOW_HEIGHT * 0.0045,
    }

    const htmlContent = `
        <html>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <head>
                <style>
                    body {
                        margin: 0;
                        padding: 0;
                        width: 100%;
                        height: 100%;
                        overflow: hidden;
                        background-color: #F2F2F2;
                    }
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: fill;
                    }
                </style>
            </head>
            <body>
                <img src="${imageURL}" />
            </body>
        </html>
    `;

    return (
        <View style={isDetail && { height: ITEM_SIZE * 1.3 }}>
            <WebView
                style={(()=>{
                    if(isDetail) return detailWebViewStyles;
                    else if(isCommunity) return communityWebViewStyles;
                    else return (webViewStyles)
                })()}
                source={{ html: htmlContent }}
                originWhitelist={['*']}
                scrollEnabled={false}
            />
        </View>
    );
});

export default WebViewImage;
