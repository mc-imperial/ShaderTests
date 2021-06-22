#version 320 es
precision highp float;

precision highp int;

layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 0) uniform buf0 {
 vec2 resolution;
};
float compute_value(float limit, float thirty_two)
{
 float result = - 0.5;
 for(int i = 1; i < 800; i ++)
  {
   if((i % 32) == 0)
    {
     result += 0.4;
    }
   else
    {
     if(mod(float(i), round(thirty_two)) <= 0.01)
      {
       result += 100.0;
      }
    }
   if(float(i) >= limit)
    {
     return result;
    }
  }
 return result;
}
void main()
{
 vec3 c = vec3(7.0, 8.0, 9.0);
 float thirty_two = round(resolution.x / 8.0);
 c.x = compute_value(gl_FragCoord.x, thirty_two);
 c.y = compute_value(gl_FragCoord.y, thirty_two);
 c.z = c.x + c.y;
 for(int i = 0; i < 3; i ++)
  {
   if(c[i] >= 1.0)
    {
     c[i] = c[i] * c[i];
    }
  }
 _GLF_color = vec4(normalize(abs(c)), 1.0);
}
