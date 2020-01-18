# RadarPET - Aplicativo de localização e recuperação de pets (versão React Native)

Aplicativo Ionic criado na aula ao vivo do Prof. Felipe Fontoura no dia 14-Mar-2019.

Participe da Aula ao Vivo no Canal Dev Samurai: https://www.youtube.com/c/DevsamuraiBr/live

**UPDATE**

Um novo branch foi adicionado em função da aula do dia 21/03/2019: https://gitlab.com/devsamurai/rnRadarPet/tree/server

## Roteiro da aula ao vivo

1. Criar o projeto React Native

    * Executar os comandos de criação do projeto:
    ```
    $ react-native init rnRadarPet
    $ cd rnRadarPet
    $ react-native run-android
    ```

    * No emulador digite: `Ctrl+M` e habilite o **Live Reload**.
    * Ajustar a estrutura de arquivos padrão: `App.js` -> `src/index.js` e `src/styles.js`

2. Instalar o plugin do Google Maps

    * API: https://github.com/react-native-community/react-native-maps/blob/master/docs/installation.md

    * Instalar os componentes:
    ```
    $ npm install react-native-maps --save
    $ react-native link react-native-maps
    ```

    * Receber uma chave de API: https://console.cloud.google.com/google/maps-apis/overview
    * Ajustar as keys em `android/app/src/main/AndroidManifest.xml`
    ```xml
    <application>
      <!-- You will only need to add this meta-data tag, but make sure it's a child of application -->
      <meta-data
        android:name="com.google.android.geo.API_KEY"
        android:value="AIzaSyCIyvlVETTjDy-nBRMGz4ZROH81AMCXSpE"/>
    </application>
    ```

3. Utilizar o Geolocation

    * API: https://facebook.github.io/react-native/docs/geolocation
    * No arquivo `AndroidManifest.xml` adicionar:
    ```xml
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    ```
    * Utilizar da seguinte forma:
    ```javascript
    async componentDidMount() {
      navigator.geolocation.getCurrentPosition(
        async({ coords: {latitude, longitude} }) => {
          // latitude
          // longitude
        }
      );
    }
    ```

4. Adicionar os Pets
    
    * Criar uma classe de serviço chamada `FetchPet.js`.
    * Retornar estaticamente os resultados de todos os pets perdidos.

5. Criar o componente `PetScreen`
  
  * API: https://facebook.github.io/react-native/docs/navigation
  * Documentação sobre o React Navigation: https://reactnavigation.org/docs/en/getting-started.html
  * Instalar o componente:
  ```
  $ npm install --save react-navigation
  $ npm install --save react-native-gesture-handler
  $ react-native link
  ```

  * Ajustar os componentes e a classe `App` para suportar o `AppNavigator`.
  * Ajustar o layout da página `PetScreen`
