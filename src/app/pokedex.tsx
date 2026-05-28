import React, { useEffect, useState } from 'react';

import { getPokemons } from '@/integration/pokemonIntegration';
import { Pokemon } from '@/@types/pokemon';

import {
    View,
    Text,
} from 'react-native';

export default function Pokedex() {
    const [loading, setLoading] = useState(true);
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
        async function loadData() {
            try {
                const data = await getPokemons(151);
                setPokemons(data);
            } catch (e) {
                console.error('Erro ao carregar pokémons:', e);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, []);

    return (
        <View>
            <Text>{JSON.stringify(pokemons, null, 2)}</Text>
        </View>
    );
}