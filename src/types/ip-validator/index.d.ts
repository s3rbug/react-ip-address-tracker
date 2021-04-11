declare module "ip-validator" {
	export function ipv4(ip: string): boolean;
	export function ipv6(ip: string): boolean;
	export function ip(ip: string): boolean;
}
