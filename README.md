# React Native Component 예제 !!

테스트 버전은 "react-native": "^0.34.1".
모든 속성을 다 테스트 하지는 않았다.(IOS, Android 전용 컴포넌트도 제외) 

가장 기본적인 내용으로 간단한 샘플을 만들어서 봄.

해당 예제를 다운받은 후 하나씩 따라해보면서 Spec에 있는 다른 속성들도 테스트하면서 진행하는게 제일 좋을 것 같음.

* ActivityIndicator
* Image
* KeyboardAvoidingView
* ListView
* MapView
* Modal
* Navigator
* Picker
* RefreshControl
* ScrollView
* Slider
* StatusBar
* Switch
* Text
* TextInput
* TouchableHighlight
* TouchableOpacity
* TouchableWithoutFeedback
* View
* WebView

## ActivityIndicator

Indicator : 흔히 사용하는 로딩상태 표시

## Image

이미지

## KeyboardAvoidingView

입력창에 포커스가 갔을 때, 하단에 올라오는 키보드의 영역을 padding, position으로 처리할 수 있다.

## ListView

목록 리스트. ScrollView와 같이 쓰다보면 문제에 봉착하게 될 것이다. (따로 따로 쓰자.)

## MapView

구글 지도가 연동되어 다양한 속성이 있으니, 한번씩 따라해보자.

## Modal

모달창. 해당 모달은 StatusBar도 덮음.

## Navigator

네비게이터

## Picker

피커

## RefreshControl

일반적인 앱에서 상단에서 터치 후 아래로 움직이면 내용의 새로고침이 발생할 때 주로 사용.

## ScrollView

Web만 작업한 사람들은 컨텐츠가 길어지면 잘리는 현상에 당혹하게 될 것이나, flex:1과 같은 스타일과 함께 잘 사용하면 된다.

## Slider

슬라이더

## StatusBar

컨텐츠 영역 상단의 StatusBar. IOS와 Android와 상단에 간격을 가지고 있고 가지지 않는 차이가 있어서 스타일로 Platform.OS를 분기하여 처리. (더 좋은 방법이 있으면 알려주세요)

## Switch

스위치

## Text

텍스트

## TextInput

입력창

## TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback

세가지 터치를 잘 비교해보자.

## View

UI를 구축하기위한 가장 기본적인 구성 요소.

## WebView

앱내에서 웹뷰를 띄울때.

원하는 uri를 넣었는데 다음과 같은 오류가 발생했다면...

![오류화면](http://wagunblog.com/wp/wp-content/uploads/2016/10/react-native-component-1.png)

Xcode에 Info.plist 파일 > App Transport Security Settings > Exception Domains 에 

+로 경로 추가(ex:wagunblog.com - Dictionary) > NSTemporaryExceptionAllowsInsecureHTTPLoads : true 설정

![추가완료화면](http://wagunblog.com/wp/wp-content/uploads/2016/10/react-native-component-3.png)

Xcode에서 command + shift + K, command + shift + B 재빌드 해서 다시보면 잘나옴

![결과화면](http://wagunblog.com/wp/wp-content/uploads/2016/10/react-native-component-3.png)