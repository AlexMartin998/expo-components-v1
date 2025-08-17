import { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native';

import ThemedCard from '@/presentation/shared/ThemedCard';
import ThemedText from '@/presentation/shared/ThemedText';
import ThemedTextInput from '@/presentation/shared/ThemedTextInput';
import ThemedView from '@/presentation/shared/ThemedView';

const isIOs = Platform.OS === 'ios';

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    address: '',
  });

  return (
    // componente para tratar de manejar inputs al final x teclado q los oculta
    <KeyboardAvoidingView behavior={isIOs ? 'height' : undefined}>
      <ScrollView>
        <ThemedView useMargin>
          <ThemedTextInput
            placeholder="Name"
            value={form.name}
            onChangeText={text => setForm({ ...form, name: text })}
            //
            autoCapitalize="words"
            autoCorrect={false}
          />

          <ThemedTextInput
            placeholder="Email"
            value={form.email}
            onChangeText={text => setForm({ ...form, email: text })}
            keyboardType="email-address"
            //
            autoCapitalize="none"
            autoCorrect={false}
          />

          <ThemedTextInput
            placeholder="Phone"
            value={form.phone}
            onChangeText={text => setForm({ ...form, phone: text })}
            keyboardType="phone-pad"
            //
            textContentType="telephoneNumber"
          />

          <ThemedTextInput
            placeholder="Password"
            value={form.password}
            onChangeText={text => setForm({ ...form, password: text })}
            secureTextEntry
            autoCapitalize="none"
          />

          {/* ---------------- */}
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 3)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 3)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 3)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 3)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 3)}</ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText>{JSON.stringify(form, null, 3)}</ThemedText>
          </ThemedCard>
        </ThemedView>

        {/* -------- */}
        <ThemedCard>
          <ThemedTextInput
            placeholder="Address"
            value={form.address}
            onChangeText={text => setForm({ ...form, address: text })}
          />
        </ThemedCard>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
