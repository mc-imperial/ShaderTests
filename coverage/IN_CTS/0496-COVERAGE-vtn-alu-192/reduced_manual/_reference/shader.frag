#version 320 es
precision highp float;

precision highp int;

layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 0) uniform buf0 {
 vec2 resolution;
};
vec3 pickColor(int i)
{
 return vec3(float(i) / 50.0, float(i) / 120.0, float(i) / 140.0);
}
vec3 mand(float xCoord, float yCoord)
{
 float height = resolution.y;
 float width = resolution.x;
 float xpos = xCoord * 0.1 + (resolution.x * 0.6);
 float ypos = yCoord * 0.1 + (resolution.y * 0.4);
 float c_re = 0.8 * (xpos - width / 2.0) * 4.0 / width - 0.4;
 float c_im = 0.8 * (ypos - height / 2.0) * 4.0 / width;
 float x = 0.0, y = 0.0;
 if(0.0 > resolution.x)
  {
   x = 1.0;
   y = 1.0;
  }
 int iteration = bitfieldReverse(int(x));
 int k = bitfieldExtract(int(y), bitCount(int(x)), int(y));
 int iterationCap = 1000;
 do
  {
   if(x * x + y * y > 4.0)
    {
     break;
    }
   float x_new = x * x - y * y + c_re;
   y = 2.0 * x * y + c_im;
   x = x_new;
   iteration ++;
   k ++;
  }
 while(k < bitfieldInsert(iterationCap + (257.0 > resolution.y ? 1 : 0), 0, 0, 0));
 if(0.0 > resolution.y)
  {
   iterationCap += 1;
  }
 if(iteration < bitfieldInsert(iterationCap, 0, 0, 0))
  {
   return pickColor(iteration);
  }
 else
  {
   return vec3(xCoord / resolution.x, 0.0, yCoord / resolution.y);
  }
}
void main()
{
 int msb16 = 65536;
 uint uselessOutVariable;
 vec3 data[16];
 for(int i = 0; i < findMSB(16); i ++)
  {
   for(int j = 0; j < findLSB(16); j ++)
    {
     data[uaddCarry(uint(4 * j), uint(i), uselessOutVariable)] = mand(gl_FragCoord.x + float(i - bitCount(1)), gl_FragCoord.y + float(j - bitCount(1)));
    }
  }
 vec3 sum = vec3(0.0);
 for(int i = bitfieldReverse(0); i < findMSB(msb16); i ++)
  {
   sum += data[i];
  }
 sum /= vec3(16.0);
 _GLF_color = vec4(sum, 1.0);
}
