#version 320 es
precision highp float;

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
 int xpos = int(xCoord) * 256;
 int ypos = int(yCoord) * 256;
 int height = int(resolution.y) * 256;
 int width = int(resolution.x) * 256;
 int c_re = ((xpos - width / 2) * 819) / width - 102;
 int c_im = ((ypos - height / 2) * 819) / width;
 int x = 0, y = 0;
 int iteration = 0;
 for(int k = 0; k < 1000; k ++)
  {
   if(x * x + y * y > 262144)
    {
     break;
    }
   int x_new = ((x * x - y * y) / 256 + c_re);
   y = (2 * x * y / 256 + c_im);
   x = x_new;
   iteration ++;
  }
 if(iteration < 1000)
  {
   return pickColor(iteration);
  }
 else
  {
   return vec3(0.0, 0.0, 0.5);
  }
}
void main()
{
 vec3 data[16];
 for(int i = 0; i < 4; i ++)
  {
   for(int j = 0; j < 4; j ++)
    {
     data[4 * j + i] = mand(gl_FragCoord.x + float(i - 1), gl_FragCoord.y + float(j - 1));
    }
  }
 vec3 sum = vec3(0.0);
 for(int i = 0; i < 16; i ++)
  {
   sum += data[i];
  }
 sum /= vec3(16.0);
 _GLF_color = vec4(sum, 1.0);
}
