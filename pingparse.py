import sys

def convert_to_ip(num):
	#Converts a number given in octal, hex, or decimal to it's IP equivalent
	return_ip = [""]
	if "x" not in num:
		if num[0] == "0":
			try:
				to_hex = hex(int(num,8))
			except ValueError:
				print("Invalid number: starts with 0 but not octet.")
				sys.exit()
		else:
			try:
				to_hex = hex(int(num))
			except ValueError:
				print("Invalid number: not an integer.")
				sys.exit()
	else:
		try:
			to_hex = hex(int(num,16))
		except ValueError:
			print("Invalid number: starts 0x but not a hex number.")
			sys.exit()
		
	to_dec = int(to_hex.rstrip("L"), 16)
	
	if(to_dec > 4294967295):
		print("Invalid number: larger than 2^32!")
		sys.exit()

	while(to_dec > 0):
		return_ip.append((str(to_dec % 256)))
		to_dec /= 256
	
	return (".".join(return_ip[::-1]))

if (len(sys.argv) == 1) or (len(sys.argv) > 2):
	print("Please provide an argument with an IP address in decimal, octal, or hex.")
	sys.exit()
	
ip_array = sys.argv[1].split(".")



if(len(ip_array) > 4):
	print("Invalid number: too many octets.")
	sys.exit()

	
ip_addr = ""
for ip in ip_array:
	ip_addr += convert_to_ip(ip)
	if(ip_addr.count(".") > 5):
		print("Invalid number: too many octets.")
		sys.exit()

print(ip_addr.rstrip("."))