//Importação para o menu lateral funcionar
import 'react-native-gesture-handler';

//Importal o countainer da navegação
//ele controla todas as telas do app
import { NavigationContainer } from '@react-navigation/native';

// importar o menu lateral (DRAWLER)
import { createDrawerNavigator } from '@react-navigation/drawer';

//importar as telas 
import Jogador1 from './components/Jogador1';

//criar o Drawler
const Drawer = createDrawerNavigator();

//componente principal do APP
export default function APP(){
  //o que esta dentro d return aparece na tela 
  return (
    //container principal da navegação
    <NavigationContainer>
      {/* menu lateral */ }
      <Drawer.Navigator>
        {/* tela do jogador */}
        <Drawer.Screen
        //nome que aparece no menu
        name="1 Jogador"
        component={Jogador1}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
