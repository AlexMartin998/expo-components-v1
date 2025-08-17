import { SectionList, View } from 'react-native';

import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedView from '@/presentation/shared/ThemedView';

interface Houses {
  title: string;
  data: string[];
}

const houses: Houses[] = [
  {
    title: 'DC Comics',
    data: [
      'Superman',
      'Batman',
      'Wonder Woman (Mujer Maravilla)',
      'The Flash (Flash)',
      'Aquaman',
      'Green Lantern (Linterna Verde)',
      'Cyborg',
      'Shazam',
      'Green Arrow (Flecha Verde)',
      'Batgirl (Batichica)',
      'Nightwing (Ala Nocturna)',
      'Supergirl',
      'Martian Manhunter (Detective Marciano)',
      'Harley Quinn',
      'Joker',
      'Catwoman (Gata Salvaje)',
      'Lex Luthor',
      'Poison Ivy (Hiedra Venenosa)',
      'Robin',
      'Deathstroke (Deathstroke el Terminator)',
    ],
  },
  {
    title: 'Marvel Comics',
    data: [
      'Spider-Man (Hombre Araña)',
      'Iron Man (Hombre de Hierro)',
      'Captain America (Capitán América)',
      'Thor',
      'Black Widow (Viuda Negra)',
      'Hulk',
      'Doctor Strange (Doctor Extraño)',
      'Black Panther (Pantera Negra)',
      'Captain Marvel (Capitana Marvel)',
      'Wolverine',
      'Deadpool',
      'Scarlet Witch (Bruja Escarlata)',
      'Ant-Man (Hombre Hormiga)',
      'Wasp (Avispa)',
      'Groot',
      'Rocket Raccoon (Mapache Cohete)',
      'Gamora',
      'Drax the Destroyer (Drax el Destructor)',
    ],
  },
  {
    title: 'Anime',
    data: [
      'Son Goku (Dragon Ball)',
      'Naruto Uzumaki (Naruto)',
      'Monkey D. Luffy (One Piece)',
      'Sailor Moon (Sailor Moon)',
      'Kenshin Himura (Rurouni Kenshin)',
      'Edward Elric (Fullmetal Alchemist)',
      'Inuyasha (Inuyasha)',
      'Sakura Kinomoto (Cardcaptor Sakura)',
      'Light Yagami (Death Note)',
      'Eren Yeager (Attack on Titan)',
      'Lelouch Lamperouge (Code Geass)',
      'Vegeta (Dragon Ball)',
      'Ichigo Kurosaki (Bleach)',
      'Kaneki Ken (Tokyo Ghoul)',
      'Gon Freecss (Hunter x Hunter)',
      'Asuka Langley Soryu (Neon Genesis Evangelion)',
      'Saitama (One Punch Man)',
      'Mikasa Ackerman (Attack on Titan)',
      'Natsu Dragneel (Fairy Tail)',
      'Usagi Tsukino (Sailor Moon)',
      'Sasuke Uchiha (Naruto)',
    ],
  },
];

const SectionListScreen = () => {
  return (
    <ThemedView useMargin>
      <ThemedCard>
        {/* --------- SECTION LIST --------- */}
        <SectionList
          sections={houses}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <View className="px-4 py-2 border-b border-gray-300 dark:border-gray-700">
              <ThemedText className="text-gray-800 dark:text-gray-200">
                {item}
              </ThemedText>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          // header ----
          ListHeaderComponent={() => (
            <ThemedText type="h1" className="mb-4">
              Heroes and Villains
            </ThemedText>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <View className="bg-gray-200 dark:bg-gray-800 px-4 py-3">
              <ThemedText className="font-bold text-lg text-gray-900 dark:text-gray-100">
                {title}
              </ThemedText>
            </View>
          )}
          stickySectionHeadersEnabled
          // footer ----
          ListFooterComponent={() => (
            <View className="px-4 py-2">
              <ThemedText className="text-gray-600 dark:text-gray-400">
                End of List - Total Sections: {houses.length}
              </ThemedText>
            </View>
          )}
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default SectionListScreen;
