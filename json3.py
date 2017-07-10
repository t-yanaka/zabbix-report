import json

f = open('output.json', 'r')
json_dict = json.load(f)

print (json_dict)
print ("\n")
print (json_dict.items())
print ("\n")
print (json_dict.keys())
print ("\n")
print (json_dict.values())

for key, value in json_dict.items():
    print ("key: %s,\t value:%d" %(key, value))

print ("\n")
print ("\n")

for keys in json_dict.keys():
    print ("key: %s" %(key))

print ("\n")
print ("\n")

for value in json_dict.values():
    print ("value: %s" %(value))

