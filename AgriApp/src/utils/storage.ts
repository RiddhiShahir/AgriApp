import AsyncStorage from "@react-native-async-storage/async-storage";

export async function addRole(phone: string, role: string) {
  const KEY = `REGISTERED_ROLES_${phone}`;

  const rolesJson = await AsyncStorage.getItem(KEY);
  let roles: string[] = rolesJson ? JSON.parse(rolesJson) : [];

  if (!roles.includes(role)) {
    roles.push(role);
    await AsyncStorage.setItem(KEY, JSON.stringify(roles));
  }
}

export async function getRoles(phone: string): Promise<string[]> {
  const KEY = `REGISTERED_ROLES_${phone}`;
  const rolesJson = await AsyncStorage.getItem(KEY);
  return rolesJson ? JSON.parse(rolesJson) : [];
}

// import AsyncStorage from '@react-native-async-storage/async-storage';

// export async function addRole(role: string) {
//   const rolesJson = await AsyncStorage.getItem('REGISTERED_ROLES');
//   const roles: string[] = rolesJson ? JSON.parse(rolesJson) : [];
//   if (!roles.includes(role)) {
//     roles.push(role);
//     await AsyncStorage.setItem('REGISTERED_ROLES', JSON.stringify(roles));
//   }
// }
