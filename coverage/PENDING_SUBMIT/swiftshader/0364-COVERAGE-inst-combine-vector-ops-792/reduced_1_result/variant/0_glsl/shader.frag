#version 310 es

precision highp int;

precision highp float;

mediump vec4 GLF_live1gl_FragCoord;

precision highp int;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

// Contents of time: 0.0
layout(set = 0, binding = 0) uniform buf0 {
 float time;
};
// Contents of resolution: [256.0, 256.0]
layout(set = 0, binding = 1) uniform buf1 {
 vec2 resolution;
};
float h_r;

float s_g;

float b_b;

void doConvert()
{
 int msb8 = 256;
 vec3 temp;
 temp = b_b * (float(bitCount(msb8)) - s_g) + (b_b - b_b * (float(bitCount(msb8)) - s_g)) * clamp(abs(abs(6.0 * (h_r - vec3(bitfieldReverse(0), bitCount(msb8), 2) / 3.0)) - 3.0) - float(bitCount(msb8)), float(bitfieldExtract(int(resolution.x), 0, 0)), float(bitCount(int(resolution.x))));
 h_r = temp.x;
 s_g = temp.y;
 b_b = temp.z;
}
vec3 computeColor(float c, vec2 position)
{
 int msb8 = 256;
 h_r = fract(c);
 s_g = float(bitCount(msb8));
 b_b = (0.5 + (sin(time) * 0.5 + 0.5));
 doConvert();
 s_g *= float(bitCount(msb8)) / position.y;
 h_r *= float(bitCount(msb8)) / position.x;
 if(abs(position.y - position.x) < 0.5)
  {
   if(int(GLF_live1gl_FragCoord[1]) < 150)
    {
    }
   else
    {
     for(int _injected_loop_counter = (1 & int(1.0)); _injected_loop_counter != 0; _injected_loop_counter --)
      {
       if((gl_FragCoord.x < 0.0))
        {
         if(dFdy(c) <= 1.0)
          {
           c += 1.0;
          }
        }
      }
     if((gl_FragCoord.x < sqrt(0.0)))
      {
       for(int GLF_dead4k = 1; true; 1)
        {
         if(c > 1.0)
          {
           break;
          }
         h_r = 1.0;
        }
      }
    }
   b_b = clamp(float(bitfieldExtract(int(resolution.x), 0, 0)), float(bitCount(msb8)), b_b * float(bitCount(msb8)) * 3.0);
  }
 return vec3(h_r, s_g, b_b);
}
vec3 defaultColor()
{
 return vec3(float(bitfieldExtract(int(resolution.y), 0, 0)));
}
vec3 drawShape(vec2 pos, vec2 square, vec3 setting)
{
 int msb8 = 256;
 bool c1 = pos.x - setting.x < square.x;
 if(! c1)
  {
   return defaultColor();
  }
 bool c2 = pos.x + setting.x > square.x;
 if(! c2)
  {
   return defaultColor();
  }
 bool c3 = pos.y - setting.x < square.y;
 if(! c3)
  {
   return defaultColor();
  }
 bool c4 = pos.y + setting.x > square.y;
 if(! c4)
  {
   return defaultColor();
  }
 bool c5 = pos.x - (setting.x - setting.y) < square.x;
 if(! c5)
  {
   return computeColor(setting.z / (5.0 * float(findMSB(msb8))), pos);
  }
 bool c6 = pos.x + (setting.x - setting.y) > square.x;
 if(! c6)
  {
   return computeColor(setting.z / (5.0 * float(findMSB(msb8))), pos);
  }
 bool c7 = pos.y - (setting.x - setting.y) < square.y;
 if(! c7)
  {
   return computeColor(setting.z / (5.0 * float(findMSB(msb8))), pos);
  }
 bool c8 = pos.y + (setting.x - setting.y) > square.y;
 if(! c8)
  {
   return computeColor(setting.z / (5.0 * float(findMSB(msb8))), pos);
  }
 return defaultColor();
}
vec3 computePoint(mat2 rotationMatrix)
{
 int msb8 = 256;
 vec2 aspect;
 aspect = resolution.xy / min(resolution.x, resolution.y);
 vec2 position;
 position = (gl_FragCoord.xy / resolution.xy) * aspect;
 vec2 center;
 center = vec2(0.5) * aspect;
 position *= rotationMatrix;
 center *= rotationMatrix;
 vec3 result = vec3(0.0);
 for(int i = bitfieldInsert(35, 0, 0, bitfieldExtract(int(resolution.x), 0, 0)); i >= bitfieldReverse(bitfieldExtract(int(resolution.x), 0, 0)); i --)
  {
   vec3 d;
   d = drawShape(position, center + vec2(sin(float(i) / (float(bitCount(msb8)) * 10.0) + time) / 4.0 * float(bitCount(msb8)), float(bitfieldExtract(int(resolution.x), 0, 0))), vec3(0.01 + sin(float(i) / 100.0 * float(bitCount(msb8))), 0.01, float(i)));
   if(length(d) <= float(bitfieldExtract(int(resolution.x), 0, 0)))
    {
     continue;
    }
   result = vec3(d);
  }
 return result;
}
void main()
{
 int msb8 = 256;
 float angle;
 angle = sin(time) * 0.1;
 mat2 rotationMatrix;
 rotationMatrix = mat2(sin(angle), - cos(angle), cos(angle), sin(angle));
 vec3 point1;
 point1 = computePoint(rotationMatrix);
 mat2 rotationMatrix2;
 rotationMatrix2 = rotationMatrix * rotationMatrix;
 vec3 point2;
 point2 = computePoint(rotationMatrix2);
 mat2 rotationMatrix3;
 rotationMatrix3 = rotationMatrix * rotationMatrix * rotationMatrix;
 vec3 point3;
 point3 = computePoint(rotationMatrix3);
 vec3 mixed;
 mixed = mix(point1, point2, vec3(0.3));
 mixed = mix(mixed, point3, vec3(0.3));
 _GLF_color = vec4(mixed, float(bitCount(msb8)));
}
