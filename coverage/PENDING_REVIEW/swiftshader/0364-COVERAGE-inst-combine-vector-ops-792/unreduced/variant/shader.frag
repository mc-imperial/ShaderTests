#version 310 es

#ifndef REDUCER
#define _GLF_ZERO(X, Y)                   (Y)
#define _GLF_ONE(X, Y)                    (Y)
#define _GLF_FALSE(X, Y)                  (Y)
#define _GLF_TRUE(X, Y)                   (Y)
#define _GLF_IDENTITY(X, Y)               (Y)
#define _GLF_DEAD(X)                      (X)
#define _GLF_FUZZED(X)                    (X)
#define _GLF_WRAPPED_LOOP(X)              X
#define _GLF_WRAPPED_IF_TRUE(X)           X
#define _GLF_WRAPPED_IF_FALSE(X)          X
#define _GLF_SWITCH(X)                    X
#define _GLF_MAKE_IN_BOUNDS_INT(IDX, SZ)  clamp(IDX, 0, SZ - 1)
#define _GLF_MAKE_IN_BOUNDS_UINT(IDX, SZ) clamp(IDX, 0u, SZ - 1u)
#endif

// END OF GENERATED HEADER
precision highp float;

layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
mediump vec4 GLF_live7gl_FragCoord;

layout(set = 0, binding = 1) uniform buf1 {
 vec2 GLF_live7injectionSwitch;
};
struct GLF_live7BinarySearchObject {
 int prime_numbers[10];
} ;

precision highp float;

struct GLF_live6BST {
 int data;
 int leftIndex;
 int rightIndex;
} ;

GLF_live6BST GLF_live6tree[10];

void GLF_live6makeTreeNode(inout GLF_live6BST GLF_live6tree, int GLF_live6data)
{
 GLF_live6tree.data = GLF_live6data;
 GLF_live6tree.leftIndex = - 1;
 GLF_live6tree.rightIndex = - 1;
}
int GLF_live6search(int GLF_live6target)
{
 GLF_live6BST GLF_live6currentNode;
 int GLF_live6index = 0;
 {
  int GLF_live6_looplimiter1 = 0;
  while(GLF_live6index != - 1)
   {
    if(GLF_live6_looplimiter1 >= 6)
     {
      break;
     }
    GLF_live6_looplimiter1 ++;
    GLF_live6currentNode = GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6index, 10)];
    if(GLF_live6currentNode.data == GLF_live6target)
     {
      return GLF_live6target;
     }
    GLF_live6index = GLF_live6target > GLF_live6currentNode.data ? GLF_live6currentNode.rightIndex : GLF_live6currentNode.leftIndex;
   }
 }
 return - 1;
}
precision highp float;

vec4 GLF_live5_GLF_color;

layout(set = 0, binding = 2) uniform buf2 {
 float GLF_live5one;
};
mat2x4 GLF_live5m24;

mat3x2 GLF_live5m32;

mat3x4 GLF_live5m34;

mat4x2 GLF_live5m42;

mat4x3 GLF_live5m43;

precision highp float;

mediump vec4 GLF_live4gl_FragCoord;

layout(set = 0, binding = 3) uniform buf3 {
 float GLF_live4time;
};
layout(set = 0, binding = 4) uniform buf4 {
 vec2 GLF_live4resolution;
};
float GLF_live4h_r;

float GLF_live4s_g;

float GLF_live4b_b;

void GLF_live4doConvert()
{
 int GLF_live4msb8 = 256;
 vec3 GLF_live4temp;
 GLF_live4temp = GLF_live4b_b * (float(bitCount(GLF_live4msb8)) - GLF_live4s_g) + (GLF_live4b_b - GLF_live4b_b * (float(bitCount(GLF_live4msb8)) - GLF_live4s_g)) * clamp(abs(abs(6.0 * (GLF_live4h_r - vec3(bitfieldReverse(0), bitCount(GLF_live4msb8), 2) / 3.0)) - 3.0) - float(bitCount(GLF_live4msb8)), float(bitfieldExtract(int(GLF_live4resolution.x), 0, 0)), float(bitCount(int(GLF_live4resolution.x))));
 GLF_live4h_r = GLF_live4temp.x;
 GLF_live4s_g = GLF_live4temp.y;
 GLF_live4b_b = GLF_live4temp.z;
}
vec3 GLF_live4computeColor(float GLF_live4c, vec2 GLF_live4position)
{
 int GLF_live4msb8 = 256;
 GLF_live4h_r = fract(GLF_live4c);
 GLF_live4s_g = float(bitCount(GLF_live4msb8));
 GLF_live4b_b = (0.5 + (sin(GLF_live4time) * 0.5 + 0.5));
 if(_GLF_WRAPPED_IF_TRUE(true))
  {
   GLF_live4doConvert();
  }
 else
  {
  }
 GLF_live4s_g *= float(bitCount(GLF_live4msb8)) / GLF_live4position.y;
 GLF_live4h_r *= float(bitCount(GLF_live4msb8)) / GLF_live4position.x;
 if(abs(GLF_live4position.y - GLF_live4position.x) < 0.5)
  {
   GLF_live4b_b = clamp(float(bitfieldExtract(int(GLF_live4resolution.x), 0, 0)), float(bitCount(GLF_live4msb8)), GLF_live4b_b * float(bitCount(GLF_live4msb8)) * 3.0);
  }
 return vec3(GLF_live4h_r, GLF_live4s_g, GLF_live4b_b);
}
vec3 GLF_live4defaultColor()
{
 return vec3(float(bitfieldExtract(int(GLF_live4resolution.y), 0, 0)));
}
vec3 GLF_live4drawShape(vec2 GLF_live4pos, vec2 GLF_live4square, vec3 GLF_live4setting)
{
 int GLF_live4msb8 = 256;
 bool GLF_live4c1 = GLF_live4pos.x - GLF_live4setting.x < GLF_live4square.x;
 if(! GLF_live4c1)
  {
   return GLF_live4defaultColor();
  }
 bool GLF_live4c2 = GLF_live4pos.x + GLF_live4setting.x > GLF_live4square.x;
 if(! GLF_live4c2)
  {
   return GLF_live4defaultColor();
  }
 bool GLF_live4c3 = GLF_live4pos.y - GLF_live4setting.x < GLF_live4square.y;
 if(! GLF_live4c3)
  {
   return GLF_live4defaultColor();
  }
 bool GLF_live4c4 = GLF_live4pos.y + GLF_live4setting.x > GLF_live4square.y;
 if(! GLF_live4c4)
  {
   return GLF_live4defaultColor();
  }
 bool GLF_live4c5 = GLF_live4pos.x - (GLF_live4setting.x - GLF_live4setting.y) < GLF_live4square.x;
 if(! GLF_live4c5)
  {
   return GLF_live4computeColor(GLF_live4setting.z / (5.0 * float(findMSB(GLF_live4msb8))), GLF_live4pos);
  }
 bool GLF_live4c6 = GLF_live4pos.x + (GLF_live4setting.x - GLF_live4setting.y) > GLF_live4square.x;
 if(! GLF_live4c6)
  {
   return GLF_live4computeColor(GLF_live4setting.z / (5.0 * float(findMSB(GLF_live4msb8))), GLF_live4pos);
  }
 bool GLF_live4c7 = GLF_live4pos.y - (GLF_live4setting.x - GLF_live4setting.y) < GLF_live4square.y;
 if(! GLF_live4c7)
  {
   return GLF_live4computeColor(GLF_live4setting.z / (5.0 * float(findMSB(GLF_live4msb8))), GLF_live4pos);
  }
 bool GLF_live4c8 = GLF_live4pos.y + (GLF_live4setting.x - GLF_live4setting.y) > GLF_live4square.y;
 if(! GLF_live4c8)
  {
   return GLF_live4computeColor(GLF_live4setting.z / (5.0 * float(findMSB(GLF_live4msb8))), GLF_live4pos);
  }
 return GLF_live4defaultColor();
}
precision highp float;

precision highp float;

mediump vec4 GLF_dead4gl_FragCoord;

vec4 GLF_dead4_GLF_color;

vec2 GLF_dead4resolution = vec2(0.27284533, 0.114670515);

vec3 GLF_dead4pickColor(int GLF_dead4i)
{
 return vec3(float(GLF_dead4i) / 50.0, float(GLF_dead4i) / 120.0, float(GLF_dead4i) / 140.0);
}
vec3 GLF_dead4mand(float GLF_dead4xCoord, float GLF_dead4yCoord)
{
 float GLF_dead4height = GLF_dead4resolution.y;
 float GLF_dead4width = GLF_dead4resolution.x;
 float GLF_dead4xpos = GLF_dead4xCoord * 0.1 + (GLF_dead4resolution.x * 0.6);
 float GLF_dead4ypos = GLF_dead4yCoord * 0.1 + (GLF_dead4resolution.y * 0.4);
 float GLF_dead4c_re = 0.8 * (GLF_dead4xpos - GLF_dead4width / 2.0) * 4.0 / GLF_dead4width - 0.4;
 float GLF_dead4c_im = 0.8 * (GLF_dead4ypos - GLF_dead4height / 2.0) * 4.0 / GLF_dead4width;
 float GLF_dead4x = 0.0, GLF_dead4y = 0.0;
 int GLF_dead4iteration = 0;
 for(int GLF_dead4k = 0; GLF_dead4k < 1000; GLF_dead4k ++)
  {
   if(GLF_dead4x * GLF_dead4x + GLF_dead4y * GLF_dead4y > 4.0)
    {
     break;
    }
   float GLF_dead4x_new = GLF_dead4x * GLF_dead4x - GLF_dead4y * GLF_dead4y + GLF_dead4c_re;
   GLF_dead4y = 2.0 * GLF_dead4x * GLF_dead4y + GLF_dead4c_im;
   {
    vec3 GLF_live4d = _GLF_FUZZED((mat4x3(2.1, 81.13, -3.5, 334.092, 60.82, 5.9, 0.9, 7943.1402, 4.9, 3485.2077, 377.129, -2.3) * vec4(-33.29, -6669.0138, 3.5, -59.92)));
    if(length(GLF_live4d) <= float(bitfieldExtract(int(GLF_live4resolution.x), 0, 0)))
     {
      1;
     }
   }
   GLF_dead4x = GLF_dead4x_new;
   GLF_dead4iteration ++;
  }
 if(GLF_dead4iteration < 1000)
  {
   return GLF_dead4pickColor(GLF_dead4iteration);
  }
 else
  {
   {
    float GLF_live5sums[9] = _GLF_FUZZED(float[9](-8.1, 1.7, 0.8, -9.4, -93.68, 865.158, 2.1, -6546.2470, -9.4));
    int GLF_live5c = _GLF_FUZZED(ivec2(-92086, -83688).r);
    {
     int GLF_live5_looplimiter22 = 0;
     for(int GLF_live5r = 0; GLF_live5r < 4; GLF_live5r ++)
      {
       if(GLF_live5_looplimiter22 >= 6)
        {
         break;
        }
       GLF_live5_looplimiter22 ++;
       GLF_live5sums[2] += GLF_live5m24[_GLF_MAKE_IN_BOUNDS_INT(GLF_live5c, 2)][_GLF_MAKE_IN_BOUNDS_INT(GLF_live5r, 4)];
      }
    }
   }
   return vec3(GLF_dead4xCoord / GLF_dead4resolution.x, 0.0, GLF_dead4yCoord / GLF_dead4resolution.y);
  }
}
precision highp float;

float GLF_dead7b_b;

precision highp float;

precision highp float;

precision highp float;

precision highp int;

precision highp float;

vec3 GLF_dead2pickColor(int GLF_dead2i)
{
 return vec3(float(GLF_dead2i) / 50.0, float(GLF_dead2i) / 120.0, float(GLF_dead2i) / 140.0);
}
precision highp float;

struct GLF_dead1QuicksortObject {
 int numbers[10];
} ;

GLF_dead1QuicksortObject GLF_dead1obj;

precision highp float;

layout(set = 0, binding = 5) uniform buf5 {
 float GLF_live0one;
};
mat2 GLF_live0m22;

mat2x3 GLF_live0m23;

mat2x4 GLF_live0m24;

mat3x2 GLF_live0m32;

mat3 GLF_live0m33;

mat3x4 GLF_live0m34;

mat4x2 GLF_live0m42;

mat4x3 GLF_live0m43;

mat4 GLF_live0m44;

precision highp float;

mediump vec4 GLF_live1gl_FragCoord;

layout(set = 0, binding = 6) uniform buf6 {
 vec2 GLF_live1injectionSwitch;
};
const int GLF_live1N = 10;

int GLF_live1data[10], GLF_live1temp[10];

void GLF_live1merge(int GLF_live1from, int GLF_live1mid, int GLF_live1to)
{
 int GLF_live1k = GLF_live1from, GLF_live1i = GLF_live1from, GLF_live1j = GLF_live1mid + 1;
 {
  if(_GLF_DEAD(false))
   {
    {
     vec3 GLF_dead4data[16];
     for(int GLF_dead4i = 0; GLF_dead4i < 4; GLF_dead4i ++)
      {
       for(int GLF_dead4j = 0; GLF_dead4j < 4; GLF_dead4j ++)
        {
         GLF_dead4data[_GLF_MAKE_IN_BOUNDS_INT(4 * GLF_dead4j + GLF_dead4i, 16)] = GLF_dead4mand(GLF_dead4gl_FragCoord.x + float(GLF_dead4i - 1), GLF_dead4gl_FragCoord.y + float(GLF_dead4j - 1));
        }
      }
     vec3 GLF_dead4sum = vec3(0.0);
     {
      int GLF_live6target = _GLF_FUZZED((18274 >> 83952));
      {
       GLF_live6target;
      }
     }
     for(int GLF_dead4i = 0; GLF_dead4i < 16; GLF_dead4i ++)
      {
       GLF_dead4sum += GLF_dead4data[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead4i, 16)];
      }
     GLF_dead4sum /= vec3(16.0);
     if(_GLF_WRAPPED_IF_FALSE(false))
      {
      }
     else
      {
       GLF_dead4_GLF_color = vec4(GLF_dead4sum, 1.0);
      }
    }
    {
     int GLF_live7i = _GLF_FUZZED(GLF_live1N);
     GLF_live7BinarySearchObject GLF_live7obj = _GLF_FUZZED(GLF_live7BinarySearchObject(int[10](GLF_live1N, 45721, GLF_live1N, -63873, 34138, -60427, (-68318 / GLF_live1N), (-33265 ^ GLF_live1N), 81777, (-33265 ^ GLF_live1N))));
     {
      GLF_live7obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live7i, 10)] = 17;
     }
    }
   }
  int GLF_live1_looplimiter0 = 0;
  while(GLF_live1i <= GLF_live1mid && GLF_live1j <= GLF_live1to)
   {
    if(GLF_live1_looplimiter0 >= 7)
     {
      break;
     }
    GLF_live1_looplimiter0 ++;
    if(GLF_live1data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live1i, 10)] < GLF_live1data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live1j, 10)])
     {
      GLF_live1temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live1k ++, 10)] = GLF_live1data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live1i ++, 10)];
     }
    else
     {
      GLF_live1temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live1k ++, 10)] = GLF_live1data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live1j ++, 10)];
     }
    {
     float GLF_live6angle = _GLF_FUZZED(0.7);
     {
      float GLF_live6nodeData = float(GLF_live6search(15));
      vec3 GLF_live6color;
      GLF_live6color = clamp(fract(GLF_live6angle * vec3(1.0, 5.0, GLF_live6nodeData)), 0.0, 1.0);
      GLF_live6color.x *= cosh(isnan(float(GLF_live6search(30))) ? 0.0 : 1.0);
      GLF_live6color;
     }
    }
    if(_GLF_DEAD(false))
     {
      float donor_replacementGLF_dead0s = _GLF_FUZZED(sin(GLF_live0one));
      {
       donor_replacementGLF_dead0s += 0.2;
       if(_GLF_DEAD(_GLF_IDENTITY(false, bool(bvec2(false, false)))))
        {
         float donor_replacementGLF_dead5thirty_two = _GLF_FUZZED(asinh(-20.81));
         {
          float GLF_dead5result = - 0.5;
          for(int GLF_dead5i = 1; GLF_dead5i < 800; GLF_dead5i ++)
           {
            if((GLF_dead5i % 32) == 0)
             {
              GLF_dead5result += 0.4;
             }
            else
             if(mod(float(GLF_dead5i), round(donor_replacementGLF_dead5thirty_two)) <= 0.01)
              {
               GLF_dead5result += 100.0;
              }
            if(float(GLF_dead5i) >= donor_replacementGLF_dead0s)
             {
              GLF_dead5result;
             }
            {
             float GLF_live5sums[9] = _GLF_FUZZED(float[9](-4.1, 4.7, -85.07, 9.2, -30.13, -26.98, 3.3, -26.98, -4.1));
             int GLF_live5c = _GLF_FUZZED((GLF_live1N - GLF_live1N));
             int GLF_live5_looplimiter23 = 0;
             {
              if(GLF_live5_looplimiter23 >= 6)
               {
                1;
               }
              GLF_live5_looplimiter23 ++;
              {
               int GLF_live5_looplimiter22 = 0;
               for(int GLF_live5r = 0; GLF_live5r < 4; GLF_live5r ++)
                {
                 if(GLF_live5_looplimiter22 >= 6)
                  {
                   break;
                  }
                 GLF_live5_looplimiter22 ++;
                 GLF_live5sums[2] += GLF_live5m24[_GLF_MAKE_IN_BOUNDS_INT(GLF_live5c, 2)][_GLF_MAKE_IN_BOUNDS_INT(GLF_live5r, 4)];
                }
              }
             }
            }
           }
          GLF_dead5result;
         }
        }
      }
     }
   }
 }
 {
  int GLF_live1_looplimiter1 = 0;
  while(GLF_live1i < GLF_live1N && GLF_live1i <= GLF_live1mid)
   {
    if(GLF_live1_looplimiter1 >= 7)
     {
      break;
     }
    GLF_live1_looplimiter1 ++;
    GLF_live1temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live1k ++, 10)] = GLF_live1data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live1i ++, 10)];
   }
 }
 {
  int GLF_live1_looplimiter2 = 0;
  for(int GLF_live1i = GLF_live1from; GLF_live1i <= GLF_live1to; GLF_live1i ++)
   {
    if(GLF_live1_looplimiter2 >= 7)
     {
      break;
     }
    GLF_live1_looplimiter2 ++;
    GLF_live1data[_GLF_MAKE_IN_BOUNDS_INT(GLF_live1i, 10)] = GLF_live1temp[_GLF_MAKE_IN_BOUNDS_INT(GLF_live1i, 10)];
   }
 }
}
precision highp float;

precision highp int;

vec4 GLF_live3_GLF_color;

layout(set = 0, binding = 7) uniform buf7 {
 vec3 GLF_live3polynomial;
};
float GLF_live3fx(float GLF_live3x)
{
 return GLF_live3polynomial.x * pow(GLF_live3x, 2.0) + GLF_live3polynomial.y * GLF_live3x + GLF_live3polynomial.z;
}
precision highp float;

struct GLF_live2QuicksortObject {
 int numbers[10];
} ;

GLF_live2QuicksortObject GLF_live2obj;

precision highp float;

layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 8) uniform buf8 {
 float time;
};
layout(set = 0, binding = 9) uniform buf9 {
 vec2 resolution;
};
float h_r;

float s_g;

float b_b;

void doConvert()
{
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
  {
   int donor_replacementGLF_dead6k = _GLF_FUZZED(ivec2(94729, 44390)[1]);
   mat4 donor_replacementGLF_dead6matrix_a = _GLF_FUZZED(GLF_live0m44);
   {
    int GLF_live7i = _GLF_FUZZED(33273);
    GLF_live7BinarySearchObject GLF_live7obj = _GLF_FUZZED(GLF_live7BinarySearchObject(int[10](-41940, GLF_live1N, 32196, -19685, GLF_live1N, GLF_live1N, (- GLF_live1N), ivec2(74013, -86017).s, GLF_live1N, GLF_live1N)));
    {
     GLF_live7obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live7i, 10)] = 17;
    }
   }
   int donor_replacementGLF_dead6x = _GLF_FUZZED(-36975);
   {
    h_r += pow(donor_replacementGLF_dead6matrix_a[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead6x, 4)][_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead6k, 4)], 2.0);
    GLF_live3_GLF_color[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead6x, 4)] = donor_replacementGLF_dead6matrix_a[_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead6x, 4)][_GLF_MAKE_IN_BOUNDS_INT(donor_replacementGLF_dead6k, 4)];
   }
  }
 int msb8 = 256;
 vec3 temp;
 temp = b_b * (float(bitCount(msb8)) - s_g) + (b_b - b_b * (float(bitCount(msb8)) - s_g)) * clamp(abs(abs(6.0 * (h_r - vec3(bitfieldReverse(0), bitCount(msb8), 2) / 3.0)) - 3.0) - float(bitCount(msb8)), float(bitfieldExtract(int(resolution.x), 0, 0)), float(bitCount(int(resolution.x))));
 {
  int GLF_live4msb8 = _GLF_FUZZED((ivec4(6040, -22809, 70353, -9620) - ivec4(18937, -49574, -26620, 84888)).t);
  vec3 GLF_live4setting = _GLF_FUZZED((+ vec3(9.4, 506.229, 270.742)));
  vec2 GLF_live4pos = _GLF_FUZZED((vec4(-905.475, 5.4, -53.43, 967.439) * mat2x4(-5652.2197, -0.7, -324.439, -7537.5164, -5.4, 18.69, 7.6, 2949.9027)));
  {
   GLF_live4computeColor(GLF_live4setting.z / (5.0 * float(findMSB(GLF_live4msb8))), GLF_live4pos);
  }
 }
 h_r = temp.x;
 s_g = temp.y;
 {
  int GLF_live0_looplimiter5 = 0;
  if(GLF_live0_looplimiter5 >= 3)
   {
    1;
   }
 }
 b_b = temp.z;
 {
  float GLF_live5sums[9] = _GLF_FUZZED(float[9]((251.237 / -53.15), -41.38, -8.2, float(24287u), 5599.7712, (-719.788 - -4348.0631), 8.2, -14.58, 3.5));
  int GLF_live5c = _GLF_FUZZED((int(8582.9647) % (-23088 >> GLF_live1N)));
  int GLF_live5_looplimiter30 = 0;
  for(int GLF_live5r = 0; GLF_live5r < 2; GLF_live5r ++)
   {
    if(GLF_live5_looplimiter30 >= 6)
     {
      break;
     }
    GLF_live5_looplimiter30 ++;
    GLF_live5sums[6] += GLF_live5m42[_GLF_MAKE_IN_BOUNDS_INT(GLF_live5c, 4)][_GLF_MAKE_IN_BOUNDS_INT(GLF_live5r, 2)];
   }
 }
}
vec3 computeColor(float c, vec2 position)
{
 int msb8 = 256;
 h_r = fract(c);
 s_g = float(bitCount(msb8));
 b_b = (0.5 + (sin(time) * 0.5 + 0.5));
 {
  int GLF_live5c = _GLF_FUZZED(GLF_live1N);
  int GLF_live5_looplimiter15 = 0;
  {
   if(GLF_live5_looplimiter15 >= 6)
    {
     1;
    }
   GLF_live5_looplimiter15 ++;
   {
    int GLF_live5_looplimiter14 = 0;
    for(int GLF_live5r = 0; GLF_live5r < 3; GLF_live5r ++)
     {
      if(GLF_live5_looplimiter14 >= 6)
       {
        break;
       }
      GLF_live5_looplimiter14 ++;
      GLF_live5m43[_GLF_MAKE_IN_BOUNDS_INT(GLF_live5c, 4)][_GLF_MAKE_IN_BOUNDS_INT(GLF_live5r, 3)] = GLF_live5one;
     }
   }
  }
 }
 doConvert();
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = mix(vec4(vec2(9.1, -195.982), 1.0, 3.7), vec4(5.6, -4.3, -2.9, 28.64), 19.14);
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
 }
 s_g *= float(bitCount(msb8)) / position.y;
 h_r *= float(bitCount(msb8)) / position.x;
 if(abs(position.y - position.x) < 0.5)
  {
   {
    vec2 GLF_live1color = _GLF_FUZZED(vec2(vec4(6.1, 4330.1487, 85.95, -566.968)));
    vec3 GLF_live1vecCoor = _GLF_FUZZED((- vec3(-918.494, 1.3, 0.5)));
    int GLF_live1i = _GLF_FUZZED(1758);
    if(int(GLF_live1gl_FragCoord[1]) < 30)
     {
      GLF_live1color = fract(sin(GLF_live1vecCoor.yx - trunc(float(GLF_live1data[0]))));
      GLF_live1color[0] = dFdy(GLF_live1gl_FragCoord.y);
      1;
      if(_GLF_DEAD(false))
       {
        {
         1;
        }
       }
     }
    else
     if(int(GLF_live1gl_FragCoord[1]) < 60)
      {
       GLF_live1color = fract(sin(GLF_live1vecCoor.yx - trunc(float(GLF_live1data[1]))));
       GLF_live1color[1] *= atan(faceforward(GLF_live1injectionSwitch, GLF_live1color.xx, GLF_live1vecCoor.yx).y);
       1;
      }
     else
      if(int(GLF_live1gl_FragCoord[1]) < 90)
       {
        GLF_live1color = fract(sin(GLF_live1vecCoor.yx - trunc(float(GLF_live1data[2]))));
        GLF_live1color.x += atanh(GLF_live1color.x) * cosh(GLF_live1injectionSwitch.y) * smoothstep(GLF_live1color, GLF_live1injectionSwitch, GLF_live1gl_FragCoord.yy).x;
        1;
       }
      else
       {
        if(_GLF_WRAPPED_IF_FALSE(false))
         {
         }
        else
         {
          if(int(GLF_live1gl_FragCoord[1]) < 120)
           {
            GLF_live1color = fract(acosh(clamp(GLF_live1vecCoor.yx - trunc(float(GLF_live1data[3])), 1.0, 1000.0)));
            GLF_live1color.x += (isnan(GLF_live1gl_FragCoord.x) ? log2(GLF_live1gl_FragCoord.x) : log2(GLF_live1gl_FragCoord.y));
            1;
           }
          else
           if(int(GLF_live1gl_FragCoord[1]) < 150)
            {
             1;
            }
           else
            {
             {
              vec2 GLF_live7uv = _GLF_FUZZED(vec2(0.4, -7.2));
              int GLF_live7_looplimiter1 = 0;
              int GLF_live7b = _GLF_FUZZED(ivec3(79697, -16942, 36991).y);
              int GLF_live7a = _GLF_FUZZED(ivec3(82049, 62202, 34110).x);
              {
               if(GLF_live7_looplimiter1 >= 5)
                {
                 1;
                }
               GLF_live7_looplimiter1 ++;
               GLF_live7uv.y -= step(GLF_live7injectionSwitch.y, GLF_live7uv.x) + float(GLF_live7a);
               GLF_live7uv.x *= (isnan(GLF_live7uv.y) ? cosh(GLF_live7gl_FragCoord.y) : tanh(GLF_live7gl_FragCoord.x));
               GLF_live7b --;
              }
             }
             for(int _injected_loop_counter = (1 & int(_GLF_ONE(1.0, injectionSwitch.y))); _GLF_WRAPPED_LOOP(_injected_loop_counter != 0); _injected_loop_counter --)
              {
               if(int(GLF_live1gl_FragCoord[1]) < 180)
                {
                 {
                  vec4 _GLF_outVarBackup_GLF_color;
                  _GLF_outVarBackup_GLF_color = _GLF_color;
                  _GLF_color = asinh(vec4(sqrt(vec2(-77.47, -9.8)), vec2(-7.1, -7.8)));
                  {
                   int GLF_live6target = _GLF_FUZZED(GLF_live1N);
                   {
                    GLF_live6target;
                   }
                  }
                  if(_GLF_WRAPPED_IF_TRUE(true))
                   {
                    _GLF_color = _GLF_outVarBackup_GLF_color;
                   }
                 }
                 GLF_live1color = fract(sin(GLF_live1vecCoor.yx - trunc(float(GLF_live1data[4]))));
                 GLF_live1color[1] += asinh(GLF_live1gl_FragCoord.y * ldexp(GLF_live1color.y, - GLF_live1i));
                 1;
                }
               else
                {
                 {
                  int GLF_live6treeIndex = _GLF_FUZZED(GLF_live1N);
                  int GLF_live6baseIndex = _GLF_FUZZED(-51928);
                  int GLF_live6data = _GLF_FUZZED(-63631);
                  {
                   GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6baseIndex, 10)].rightIndex = GLF_live6treeIndex;
                   GLF_live6makeTreeNode(GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6treeIndex, 10)], GLF_live6data);
                   1;
                  }
                 }
                 if(int(GLF_live1gl_FragCoord[1]) < 210)
                  {
                   GLF_live1color = fract(sin(GLF_live1vecCoor.yx - trunc(float(GLF_live1data[5]))));
                   GLF_live1color.y -= tanh(GLF_live1color.x) / cosh(GLF_live1color.y);
                   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
                    {
                     for(int GLF_dead5i = 0; GLF_dead5i < 3; GLF_dead5i ++)
                      {
                       if(GLF_live1vecCoor[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead5i, 3)] >= 1.0)
                        {
                         GLF_live1vecCoor[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead5i, 3)] = GLF_live1vecCoor[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead5i, 3)] * GLF_live1vecCoor[_GLF_MAKE_IN_BOUNDS_INT(GLF_dead5i, 3)];
                         {
                          if(_GLF_WRAPPED_IF_FALSE(false))
                           {
                           }
                          else
                           {
                            float(GLF_live6search(100));
                           }
                         }
                        }
                      }
                    }
                   1;
                  }
                 else
                  if(int(GLF_live1gl_FragCoord[1]) < 240)
                   {
                    GLF_live1color = fract(asinh(GLF_live1vecCoor.yx - trunc(float(GLF_live1data[6]))));
                    GLF_live1color.y -= isnan(float(GLF_live1i)) ? tanh(GLF_live1gl_FragCoord.x) : atanh(GLF_live1gl_FragCoord.y);
                    1;
                   }
                  else
                   if(int(GLF_live1gl_FragCoord[1]) < 270)
                    {
                     GLF_live1color = fract(sin(GLF_live1vecCoor.yx - trunc(float(GLF_live1data[7]))));
                     GLF_live1color.y *= mix(normalize(GLF_live1vecCoor), normalize(vec3(GLF_live1color, degrees(GLF_live1color.x))), GLF_live1injectionSwitch.x).y;
                     1;
                     if(_GLF_DEAD(false))
                      {
                       {
                        GLF_live1vecCoor.x += float(GLF_dead1obj.numbers[1]);
                       }
                      }
                     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
                      {
                       float donor_replacementGLF_dead5thirty_two = _GLF_FUZZED(dFdy(c));
                       for(int GLF_dead5i = 1; GLF_dead5i < 800; GLF_dead5i ++)
                        {
                         if((GLF_dead5i % 32) == 0)
                          {
                           c += 0.4;
                          }
                         else
                          {
                           {
                            int GLF_live6treeIndex = _GLF_FUZZED(9742);
                            int GLF_live6baseIndex = _GLF_FUZZED((int(-6.3) % -75172));
                            int GLF_live6data = _GLF_FUZZED((GLF_live1N + -65799));
                            {
                             if(GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6baseIndex, 10)].leftIndex == - 1)
                              {
                               GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6baseIndex, 10)].leftIndex = GLF_live6treeIndex;
                               GLF_live6makeTreeNode(GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6treeIndex, 10)], GLF_live6data);
                               1;
                              }
                             else
                              {
                               GLF_live6baseIndex = GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6baseIndex, 10)].leftIndex;
                               1;
                              }
                            }
                           }
                           if(mod(float(GLF_dead5i), round(donor_replacementGLF_dead5thirty_two)) <= 0.01)
                            {
                             c += 100.0;
                            }
                          }
                         if(float(GLF_dead5i) >= b_b)
                          {
                           c;
                          }
                        }
                      }
                    }
                   else
                    {
                     1;
                     if(_GLF_DEAD(false))
                      {
                       int donor_replacementGLF_dead2iteration = _GLF_FUZZED(bitfieldInsert(ivec2(-82835, -51452)[0], msb8, -84774, msb8));
                       {
                        return GLF_dead2pickColor(donor_replacementGLF_dead2iteration);
                       }
                       {
                        vec4 _GLF_outVarBackup_GLF_color;
                        _GLF_outVarBackup_GLF_color = _GLF_color;
                        _GLF_color = vec4(4.2, -3.5, 1.7, 7.0);
                        if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
                         {
                          _GLF_color = _GLF_outVarBackup_GLF_color;
                         }
                       }
                      }
                    }
                }
              }
             if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < sqrt(0.0)))))
              {
               int donor_replacementGLF_dead4iteration = _GLF_FUZZED(GLF_live1N);
               {
                mat2 GLF_live4rotationMatrix = _GLF_FUZZED(mat2(vec2(-2442.7897, 9501.5502), vec2(-191.643, 65.64)));
                {
                 int GLF_live4msb8 = 256;
                 vec2 GLF_live4aspect;
                 GLF_live4aspect = GLF_live4resolution.xy / min(GLF_live4resolution.x, GLF_live4resolution.y);
                 vec2 GLF_live4position;
                 GLF_live4position = (GLF_live4gl_FragCoord.xy / GLF_live4resolution.xy) * GLF_live4aspect;
                 vec2 GLF_live4center;
                 GLF_live4center = vec2(0.5) * GLF_live4aspect;
                 GLF_live4position *= GLF_live4rotationMatrix;
                 GLF_live4center *= GLF_live4rotationMatrix;
                 vec3 GLF_live4result = vec3(0.0);
                 {
                  int GLF_live4_looplimiter0 = 0;
                  for(int GLF_live4i = bitfieldInsert(35, 0, 0, bitfieldExtract(int(GLF_live4resolution.x), 0, 0)); GLF_live4i >= bitfieldReverse(bitfieldExtract(int(GLF_live4resolution.x), 0, 0)); GLF_live4i --)
                   {
                    if(GLF_live4_looplimiter0 >= 4)
                     {
                      break;
                     }
                    GLF_live4_looplimiter0 ++;
                    vec3 GLF_live4d;
                    GLF_live4d = GLF_live4drawShape(GLF_live4position, GLF_live4center + vec2(sin(float(GLF_live4i) / (float(bitCount(GLF_live4msb8)) * 10.0) + GLF_live4time) / 4.0 * float(bitCount(GLF_live4msb8)), float(bitfieldExtract(int(GLF_live4resolution.x), 0, 0))), vec3(0.01 + sin(float(GLF_live4i) / 100.0 * float(bitCount(GLF_live4msb8))), 0.01, float(GLF_live4i)));
                    if(length(GLF_live4d) <= float(bitfieldExtract(int(GLF_live4resolution.x), 0, 0)))
                     {
                      continue;
                     }
                    if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
                     {
                     }
                    else
                     {
                      GLF_live4result = vec3(GLF_live4d);
                     }
                   }
                 }
                 GLF_live4result;
                }
               }
               for(int GLF_dead4k = 0; GLF_dead4k < 1000; GLF_dead4k ++)
                {
                 if(c * c + h_r * h_r > 4.0)
                  {
                   break;
                  }
                 float GLF_dead4x_new = c * c - h_r * h_r + b_b;
                 {
                  vec4 _GLF_outVarBackup_GLF_color;
                  _GLF_outVarBackup_GLF_color = _GLF_color;
                  _GLF_color = vec4(-98.81, 9104.7437, -32.37, 4.7);
                  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
                   {
                    _GLF_color = _GLF_outVarBackup_GLF_color;
                   }
                 }
                 h_r = 2.0 * c * h_r + h_r;
                 c = GLF_dead4x_new;
                 donor_replacementGLF_dead4iteration ++;
                }
               {
                vec4 _GLF_outVarBackup_GLF_color;
                {
                 {
                  1;
                 }
                }
                _GLF_outVarBackup_GLF_color = _GLF_color;
                {
                 float GLF_live4c = _GLF_FUZZED(-3.6);
                 vec2 GLF_live4position = _GLF_FUZZED(vec2(-0.7, -6.2));
                 {
                  int GLF_live4msb8 = 256;
                  GLF_live4h_r = fract(GLF_live4c);
                  GLF_live4s_g = float(bitCount(GLF_live4msb8));
                  GLF_live4b_b = (0.5 + (sin(GLF_live4time) * 0.5 + 0.5));
                  GLF_live4doConvert();
                  GLF_live4s_g *= float(bitCount(GLF_live4msb8)) / GLF_live4position.y;
                  GLF_live4h_r *= float(bitCount(GLF_live4msb8)) / GLF_live4position.x;
                  if(abs(GLF_live4position.y - GLF_live4position.x) < 0.5)
                   {
                    GLF_live4b_b = clamp(float(bitfieldExtract(int(GLF_live4resolution.x), 0, 0)), float(bitCount(GLF_live4msb8)), GLF_live4b_b * float(bitCount(GLF_live4msb8)) * 3.0);
                   }
                  vec3(GLF_live4h_r, GLF_live4s_g, GLF_live4b_b);
                 }
                }
                _GLF_color = pow(vec4(-9760.4392, -295.863, 3.5, -2.8), vec4(2.7, -82.38, -527.016, 39.77));
                if(_GLF_WRAPPED_IF_TRUE(_GLF_IDENTITY(true, ! (_GLF_IDENTITY(! (true), bool(bool(! (true))))))))
                 {
                  _GLF_color = _GLF_outVarBackup_GLF_color;
                 }
               }
              }
            }
         }
       }
   }
   b_b = clamp(float(bitfieldExtract(int(resolution.x), 0, 0)), float(bitCount(msb8)), b_b * float(bitCount(msb8)) * 3.0);
  }
 {
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  {
   int GLF_live5_looplimiter23 = 0;
   if(GLF_live5_looplimiter23 >= 6)
    {
     1;
    }
  }
  if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
   {
   }
  else
   {
    _GLF_color = step(smoothstep(-743.559, 56.34, -8.8), vec4(10.04, -5644.0964, -6617.6626, 181.471));
   }
  if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
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
 do
  {
   if(! c1)
    {
     return defaultColor();
    }
  }
 while(_GLF_WRAPPED_LOOP(_GLF_IDENTITY(false, (false) || _GLF_FALSE(false, (gl_FragCoord.x < 0.0)))));
 {
  vec3 GLF_live2color = _GLF_FUZZED(((vec3(-4597.8143, -9.5, 725.875)) / 23.11));
  for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter != (1 | 1)); _injected_loop_counter ++)
   {
    GLF_live2color.z += float(GLF_live2obj.numbers[7]);
   }
 }
 bool c2 = pos.x + setting.x > square.x;
 if(! c2)
  {
   return defaultColor();
   if(_GLF_WRAPPED_IF_FALSE(false))
    {
    }
   else
    {
     {
      1;
     }
     if(_GLF_DEAD(false))
      {
       {
        b_b += 0.2;
       }
      }
    }
   if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= tan(0.0)))))
    {
     do
      {
       int GLF_live5c = _GLF_FUZZED(int(bvec3(false, false, true).y));
       int GLF_live5_looplimiter4 = 0;
       for(int GLF_live5r = 0; GLF_live5r < 4; GLF_live5r ++)
        {
         if(GLF_live5_looplimiter4 >= 6)
          {
           break;
          }
         GLF_live5_looplimiter4 ++;
         GLF_live5m24[_GLF_MAKE_IN_BOUNDS_INT(GLF_live5c, 2)][_GLF_MAKE_IN_BOUNDS_INT(GLF_live5r, 4)] = GLF_live5one;
        }
      }
     while(_GLF_WRAPPED_LOOP(false));
     if(_GLF_DEAD(false))
      {
       {
        {
         vec4 _GLF_outVarBackup_GLF_color;
         _GLF_outVarBackup_GLF_color = _GLF_color;
         _GLF_color = unpackSnorm4x8((184756u | 180095u));
         if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
          {
           {
            {
             int GLF_live5_looplimiter7 = 0;
             for(int GLF_live5c = 0; GLF_live5c < 3; GLF_live5c ++)
              {
               if(GLF_live5_looplimiter7 >= 6)
                {
                 break;
                }
               GLF_live5_looplimiter7 ++;
               {
                int GLF_live5_looplimiter6 = 0;
                for(int GLF_live5r = 0; GLF_live5r < 2; GLF_live5r ++)
                 {
                  if(GLF_live5_looplimiter6 >= 6)
                   {
                    break;
                   }
                  GLF_live5_looplimiter6 ++;
                  GLF_live5m32[_GLF_MAKE_IN_BOUNDS_INT(GLF_live5c, 3)][_GLF_MAKE_IN_BOUNDS_INT(GLF_live5r, 2)] = GLF_live5one;
                 }
               }
              }
            }
           }
           _GLF_color = _GLF_outVarBackup_GLF_color;
          }
        }
        b_b;
       }
      }
    }
   else
    {
    }
  }
 bool c3 = pos.y - setting.x < square.y;
 if(! c3)
  {
   return defaultColor();
  }
 bool c4 = pos.y + setting.x > square.y;
 if(! c4)
  {
   {
    int GLF_live7x = _GLF_FUZZED(35533);
    int GLF_live7m = _GLF_FUZZED(54388);
    GLF_live7BinarySearchObject GLF_live7obj = _GLF_FUZZED(GLF_live7BinarySearchObject(int[10](-96436, GLF_live1N, 20079, GLF_live1N, GLF_live1N, GLF_live1N, GLF_live1N, 81248, -98399, 27149)));
    if(GLF_live7obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live7m, 10)] == GLF_live7x)
     {
      GLF_live7m;
     }
   }
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
   {
    vec3 GLF_live4d = _GLF_FUZZED(vec3(-9854.6899, -58.47, -7647.6546));
    if(length(GLF_live4d) <= float(bitfieldExtract(int(GLF_live4resolution.x), 0, 0)))
     {
      1;
     }
   }
   if(_GLF_WRAPPED_IF_FALSE(false))
    {
    }
   else
    {
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(4.3, -463.216, 104.321, 95.86);
      }
    }
   return computeColor(setting.z / (5.0 * float(findMSB(msb8))), pos);
  }
 bool c7 = pos.y - (setting.x - setting.y) < square.y;
 if(! c7)
  {
   return computeColor(setting.z / (5.0 * float(findMSB(msb8))), pos);
   {
    vec4 _GLF_outVarBackup_GLF_color;
    _GLF_outVarBackup_GLF_color = _GLF_color;
    _GLF_color = smoothstep((vec4(-7.3, 4.3, 9.3, 5.2) / -6.6), mix(vec4(6192.5144, -591.694, -6.7, -788.495), vec4(-56.07, 24.74, -5559.2226, 45.59), 4.3), vec4(-0.0, 86.13, -5472.6228, -7.7));
    if(_GLF_WRAPPED_IF_TRUE(true))
     {
      _GLF_color = _GLF_outVarBackup_GLF_color;
      {
       bool GLF_live4c8 = _GLF_FUZZED((ivec3(-33913, -21325, -66350) != ivec3(-21236, 76979, -11746)));
       int GLF_live4msb8 = _GLF_FUZZED(53475);
       vec3 GLF_live4setting = _GLF_FUZZED(vec3(9.8, 2.8, -9246.9021));
       vec2 GLF_live4pos = _GLF_FUZZED(vec2(56.72, -1145.5610));
       if(! GLF_live4c8)
        {
         GLF_live4computeColor(GLF_live4setting.z / (5.0 * float(findMSB(GLF_live4msb8))), GLF_live4pos);
        }
      }
     }
    {
     int GLF_live5c = _GLF_FUZZED(GLF_live1N);
     int GLF_live5_looplimiter10 = 0;
     int GLF_live5r = _GLF_FUZZED(-80518);
     {
      if(GLF_live5_looplimiter10 >= 6)
       {
        1;
       }
      GLF_live5_looplimiter10 ++;
      GLF_live5m34[_GLF_MAKE_IN_BOUNDS_INT(GLF_live5c, 3)][_GLF_MAKE_IN_BOUNDS_INT(GLF_live5r, 4)] = GLF_live5one;
     }
    }
   }
  }
 bool c8 = pos.y + (setting.x - setting.y) > square.y;
 for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     {
      {
       int GLF_live1_looplimiter3 = 0;
       {
        int GLF_live4_looplimiter0 = 0;
        if(GLF_live4_looplimiter0 >= 4)
         {
          1;
         }
       }
       if(GLF_live1_looplimiter3 >= 7)
        {
         {
          {
           1;
          }
         }
         1;
         {
          vec2 GLF_live7uv = _GLF_FUZZED(vec2((-174.190 * 913.130)));
          int GLF_live7_looplimiter1 = 0;
          int GLF_live7b = _GLF_FUZZED(GLF_live1N);
          int GLF_live7a = _GLF_FUZZED(GLF_live1N);
          {
           if(GLF_live7_looplimiter1 >= 5)
            {
             1;
            }
           GLF_live7_looplimiter1 ++;
           GLF_live7uv.y -= step(GLF_live7injectionSwitch.y, GLF_live7uv.x) + float(GLF_live7a);
           GLF_live7uv.x *= (isnan(GLF_live7uv.y) ? cosh(GLF_live7gl_FragCoord.y) : tanh(GLF_live7gl_FragCoord.x));
           GLF_live7b --;
          }
         }
        }
      }
      vec4 _GLF_outVarBackup_GLF_color;
      {
       int GLF_live7i = _GLF_FUZZED(-53114);
       GLF_live7BinarySearchObject GLF_live7obj = _GLF_FUZZED(GLF_live7BinarySearchObject(int[10](GLF_live1N, 55171, 64725, GLF_live1N, GLF_live1N, -33472, 42325, GLF_live1N, 14353, GLF_live1N)));
       if(GLF_live7i == 3)
        {
         GLF_live7obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live7i, 10)] = 7;
        }
       else
        if(GLF_live7i == 4)
         {
          GLF_live7obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live7i, 10)] = 11;
         }
        else
         if(GLF_live7i == 5)
          {
           GLF_live7obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live7i, 10)] = 13;
          }
         else
          if(GLF_live7i == 6)
           {
            GLF_live7obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live7i, 10)] = 17;
           }
          else
           if(GLF_live7i == 7)
            {
             GLF_live7obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live7i, 10)] = 19;
            }
           else
            if(GLF_live7i == 8)
             {
              GLF_live7obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live7i, 10)] = 23;
             }
            else
             if(GLF_live7i == 9)
              {
               GLF_live7obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live7i, 10)] = 29;
              }
      }
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(5.5, 0.0, 1.6, -5.3);
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
        if(_GLF_DEAD(false))
         {
          vec3 donor_replacementGLF_dead4data[16] = _GLF_FUZZED(vec3[16](vec3(-7.0, 35.12, 0.7), vec3(6892.2334, 3.2, -26.01), vec3(30.51, -28.58, -383.280), GLF_live3polynomial, GLF_live3polynomial, GLF_live0m43[3], setting, setting, vec3(1.8, 2.8, -7516.2575), vec3(848.160, -12.68, 41.19), vec3(8.3, 7.0, 9964.7452), cross(setting, GLF_live3polynomial), vec3(-46.12, -74.55, -482.612), GLF_live3polynomial, vec3(-7.9, -62.16, 9743.4371), vec3(7.1, -7939.1647, -6633.2719)));
          {
           int GLF_live5_looplimiter11 = 0;
           if(GLF_live5_looplimiter11 >= 6)
            {
             1;
            }
          }
          for(int GLF_dead4i = 0; GLF_dead4i < 4; GLF_dead4i ++)
           {
            for(int GLF_dead4j = 0; GLF_dead4j < 4; GLF_dead4j ++)
             {
              donor_replacementGLF_dead4data[_GLF_MAKE_IN_BOUNDS_INT(4 * GLF_dead4j + GLF_dead4i, 16)] = GLF_dead4mand(GLF_dead4gl_FragCoord.x + float(GLF_dead4i - 1), GLF_dead4gl_FragCoord.y + float(GLF_dead4j - 1));
             }
            {
             {
              1;
             }
            }
            {
             vec4 _GLF_outVarBackup_GLF_color;
             _GLF_outVarBackup_GLF_color = _GLF_color;
             _GLF_color = radians(radians(vec4(-3.4, 9852.9782, -13.39, -820.593)));
             if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))
              {
               _GLF_color = _GLF_outVarBackup_GLF_color;
              }
            }
            {
             int GLF_live7i = _GLF_FUZZED(GLF_live1N);
             GLF_live7BinarySearchObject GLF_live7obj = _GLF_FUZZED(GLF_live7BinarySearchObject(int[10](GLF_live1N, -83716, GLF_live1N, 80764, GLF_live1N, GLF_live1N, GLF_live1N, -23459, (GLF_live1N & GLF_live1N), (~ GLF_live1N))));
             if(GLF_live7i == 8)
              {
               GLF_live7obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live7i, 10)] = 23;
              }
             else
              if(GLF_live7i == 9)
               {
                GLF_live7obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live7i, 10)] = 29;
               }
            }
           }
         }
       }
     }
     _GLF_color = vec4(-213.693, -3.7, 3.3, 183.862);
     {
      int GLF_live7i = _GLF_FUZZED(-79280);
      GLF_live7BinarySearchObject GLF_live7obj = _GLF_FUZZED(GLF_live7BinarySearchObject(int[10](72792, -71899, GLF_live1N, -54030, GLF_live1N, GLF_live1N, 7920, -88709, GLF_live1N, GLF_live1N)));
      {
       GLF_live7obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live7i, 10)] = 17;
      }
     }
    }
  }
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
 {
  {
   1.0;
  }
 }
 position = (gl_FragCoord.xy / resolution.xy) * aspect;
 {
  if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
   {
    int donor_replacementGLF_dead2c_im = _GLF_FUZZED(ivec3(81636, 66520, -36279)[1]);
    int donor_replacementGLF_dead2iteration = _GLF_FUZZED(findLSB(GLF_live1N));
    int donor_replacementGLF_dead2x = _GLF_FUZZED(-33935);
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
      {
       float donor_replacementGLF_dead4x = _GLF_FUZZED((++ b_b));
       {
        if(donor_replacementGLF_dead4x * donor_replacementGLF_dead4x + b_b * b_b > 4.0)
         {
          1;
         }
        float GLF_dead4x_new = donor_replacementGLF_dead4x * donor_replacementGLF_dead4x - b_b * b_b + s_g;
        b_b = 2.0 * donor_replacementGLF_dead4x * b_b + b_b;
        donor_replacementGLF_dead4x = GLF_dead4x_new;
        donor_replacementGLF_dead2iteration ++;
       }
      }
     if(donor_replacementGLF_dead2x * donor_replacementGLF_dead2x + msb8 * msb8 > 262144)
      {
       1;
      }
     int GLF_dead2x_new = ((donor_replacementGLF_dead2x * donor_replacementGLF_dead2x - msb8 * msb8) / 256 + msb8);
     msb8 = (2 * donor_replacementGLF_dead2x * msb8 / 256 + donor_replacementGLF_dead2c_im);
     donor_replacementGLF_dead2x = GLF_dead2x_new;
     donor_replacementGLF_dead2iteration ++;
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = vec4(-4.1, -72.50, 287.390, 1.3);
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
    }
   }
  {
   float GLF_live5sums[9] = _GLF_FUZZED(float[9](51.88, 7.3, -78.43, 0.2, 145.240, -5.8, 82.64, float(GLF_live1N), 8.7));
   int GLF_live5overall_region = _GLF_FUZZED(GLF_live1N);
   {
    GLF_live5_GLF_color = vec4(vec3(GLF_live5sums[_GLF_MAKE_IN_BOUNDS_INT(GLF_live5overall_region, 9)]), 1.0);
   }
  }
  vec4 _GLF_outVarBackup_GLF_color;
  _GLF_outVarBackup_GLF_color = _GLF_color;
  _GLF_color = ldexp(uintBitsToFloat(uvec4(5265u, 69767u, 27529u, 169174u)), ivec4(4724, 32142, -99830, -93007));
  if(_GLF_WRAPPED_IF_TRUE(true))
   {
    _GLF_color = _GLF_outVarBackup_GLF_color;
   }
  {
   vec2 GLF_live7uv = _GLF_FUZZED((mat3x2(-94.36, 7.9, -68.19, -5.1, 7.3, -782.600) * (vec3(5.4, 78.92, 1.2) - -9.2)));
   int GLF_live7a = _GLF_FUZZED(int(-2.3));
   {
    int GLF_live7_looplimiter0 = 0;
    do
     {
      if(GLF_live7_looplimiter0 >= 5)
       {
        break;
       }
      GLF_live7_looplimiter0 ++;
      GLF_live7uv.y -= step(GLF_live7injectionSwitch.y, GLF_live7uv.x);
      GLF_live7uv.x -= fract(tanh(GLF_live7uv.x)) / ldexp(GLF_live7injectionSwitch.y, findMSB(GLF_live7a));
      GLF_live7a --;
     }
    while(GLF_live7a > int(GLF_live7injectionSwitch.x));
   }
  }
 }
 vec2 center;
 center = vec2(0.5) * aspect;
 {
  {
   GLF_live3_GLF_color = vec4(0.0, 1.0, 0.0, 1.0);
  }
 }
 position *= rotationMatrix;
 center *= rotationMatrix;
 vec3 result = vec3(0.0);
 do
  {
   int GLF_live6sum = _GLF_FUZZED(GLF_live1N);
   {
    1;
    GLF_live6sum += 1;
    1;
    1;
    1;
   }
  }
 while(_GLF_WRAPPED_LOOP(false));
 for(int i = bitfieldInsert(35, 0, 0, bitfieldExtract(int(resolution.x), 0, 0)); i >= bitfieldReverse(bitfieldExtract(int(resolution.x), 0, 0)); i --)
  {
   vec3 d;
   d = drawShape(position, center + vec2(sin(float(i) / (float(bitCount(msb8)) * 10.0) + time) / 4.0 * float(bitCount(msb8)), float(bitfieldExtract(int(resolution.x), 0, 0))), vec3(0.01 + sin(float(i) / 100.0 * float(bitCount(msb8))), 0.01, float(i)));
   if(length(d) <= float(bitfieldExtract(int(resolution.x), 0, 0)))
    {
     continue;
    }
   result = vec3(d);
   if(_GLF_DEAD(false))
    {
     {
      int GLF_live6treeIndex = _GLF_FUZZED(GLF_live1N);
      int GLF_live6baseIndex = _GLF_FUZZED(GLF_live1N);
      int GLF_live6data = _GLF_FUZZED(-78874);
      {
       int GLF_live6_looplimiter0 = 0;
       while(GLF_live6baseIndex <= GLF_live6treeIndex)
        {
         if(GLF_live6_looplimiter0 >= 6)
          {
           break;
          }
         GLF_live6_looplimiter0 ++;
         if(GLF_live6data <= GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6baseIndex, 10)].data)
          {
           if(GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6baseIndex, 10)].leftIndex == - 1)
            {
             GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6baseIndex, 10)].leftIndex = GLF_live6treeIndex;
             GLF_live6makeTreeNode(GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6treeIndex, 10)], GLF_live6data);
             1;
            }
           else
            {
             GLF_live6baseIndex = GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6baseIndex, 10)].leftIndex;
             continue;
            }
          }
         else
          {
           if(GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6baseIndex, 10)].rightIndex == - 1)
            {
             GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6baseIndex, 10)].rightIndex = GLF_live6treeIndex;
             GLF_live6makeTreeNode(GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6treeIndex, 10)], GLF_live6data);
             1;
            }
           else
            {
             GLF_live6baseIndex = GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6baseIndex, 10)].rightIndex;
             continue;
            }
          }
        }
      }
     }
     _GLF_color = (mat2x4(5.9, 680.569, 3.3, 4284.0524, 431.035, -93.31, -48.85, 0.8) * vec2(-41.48, -9209.2889));
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      {
       int GLF_live6target = _GLF_FUZZED(GLF_live1N);
       {
        GLF_live6target;
       }
      }
      _GLF_color = vec4(6.5, -4.1, -873.320, 252.476);
      if(_GLF_WRAPPED_IF_TRUE(true))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
        {
         {
          int GLF_live4msb8 = 256;
          vec3 GLF_live4temp;
          GLF_live4temp = GLF_live4b_b * (float(bitCount(GLF_live4msb8)) - GLF_live4s_g) + (GLF_live4b_b - GLF_live4b_b * (float(bitCount(GLF_live4msb8)) - GLF_live4s_g)) * clamp(abs(abs(6.0 * (GLF_live4h_r - vec3(bitfieldReverse(0), bitCount(GLF_live4msb8), 2) / 3.0)) - 3.0) - float(bitCount(GLF_live4msb8)), float(bitfieldExtract(int(GLF_live4resolution.x), 0, 0)), float(bitCount(int(GLF_live4resolution.x))));
          GLF_live4h_r = GLF_live4temp.x;
          GLF_live4s_g = GLF_live4temp.y;
          GLF_live4b_b = GLF_live4temp.z;
         }
        }
       }
     }
    }
  }
 {
  float GLF_live3C = _GLF_FUZZED(-824.305);
  {
   int GLF_live6target = _GLF_FUZZED(int((19398u % 60067u)));
   {
    GLF_live6target;
   }
  }
  float GLF_live3B = _GLF_FUZZED((- 193.203));
  float GLF_live3A = _GLF_FUZZED(float(111271u));
  float GLF_live3temp = _GLF_FUZZED((float((23092u >= 59958u)) / vec2(-8.5, 586.082).y));
  float GLF_live3x0 = _GLF_FUZZED(float((22082u)));
  float GLF_live3x1 = _GLF_FUZZED(vec3(-461.192, 5.6, 959.350).t);
  float GLF_live3x2 = _GLF_FUZZED(-857.681);
  {
   int GLF_live3_looplimiter0 = 0;
   while(abs(GLF_live3x2 - GLF_live3x1) >= .000000000000001)
    {
     if(GLF_live3_looplimiter0 >= 3)
      {
       break;
      }
     GLF_live3_looplimiter0 ++;
     float GLF_live3h0 = GLF_live3x0 - GLF_live3x2;
     float GLF_live3h1 = GLF_live3x1 - GLF_live3x2;
     float GLF_live3k0 = GLF_live3fx(GLF_live3x0) - GLF_live3fx(GLF_live3x2);
     float GLF_live3k1 = GLF_live3fx(GLF_live3x1) - GLF_live3fx(GLF_live3x2);
     {
      int GLF_live5c = _GLF_FUZZED(GLF_live1N);
      int GLF_live5_looplimiter10 = 0;
      int GLF_live5r = _GLF_FUZZED(-4768);
      {
       if(GLF_live5_looplimiter10 >= 6)
        {
         1;
        }
       GLF_live5_looplimiter10 ++;
       GLF_live5m34[_GLF_MAKE_IN_BOUNDS_INT(GLF_live5c, 3)][_GLF_MAKE_IN_BOUNDS_INT(GLF_live5r, 4)] = GLF_live5one;
      }
     }
     GLF_live3temp = GLF_live3x2;
     GLF_live3A = (((GLF_live3h1) * (GLF_live3k0)) - ((GLF_live3h0) * (GLF_live3k1))) / ((pow((GLF_live3h0), 2.0) * (GLF_live3h1)) - (pow((GLF_live3h1), 2.0) * (GLF_live3h0)));
     GLF_live3B = (((GLF_live3k0) - (GLF_live3A * (pow((GLF_live3h0), 2.0)))) / (GLF_live3h0));
     GLF_live3C = GLF_live3fx(GLF_live3x2);
     {
      int GLF_live7_looplimiter0 = 0;
      if(GLF_live7_looplimiter0 >= 5)
       {
        1;
       }
     }
     GLF_live3x2 = GLF_live3x2 - ((2.0 * GLF_live3C) / (GLF_live3B + sign(GLF_live3B) * sqrt(pow(GLF_live3B, 2.0) - (4.0 * GLF_live3A * GLF_live3C))));
     GLF_live3x0 = GLF_live3x1;
     GLF_live3x1 = GLF_live3temp;
    }
  }
 }
 return result;
}
void main()
{
 int msb8 = 256;
 float angle;
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = vec4(5.3, -9.6, 668.822, 3517.4648);
  }
 angle = sin(time) * 0.1;
 mat2 rotationMatrix;
 rotationMatrix = mat2(sin(angle), - cos(angle), cos(angle), sin(angle));
 vec3 point1;
 {
  int GLF_live1_looplimiter4 = 0;
  int GLF_live1low = _GLF_FUZZED((-55674 >> -43129));
  int GLF_live1high = _GLF_FUZZED(ivec3(35639, 14558, 78618).y);
  for(int GLF_live1m = 1; GLF_live1m <= GLF_live1high; GLF_live1m = 2 * GLF_live1m)
   {
    {
     int GLF_live7i = _GLF_FUZZED(-67775);
     GLF_live7BinarySearchObject GLF_live7obj = _GLF_FUZZED(GLF_live7BinarySearchObject(int[10](-72124, GLF_live1N, GLF_live1N, -85754, -57116, -26737, -66772, GLF_live1N, GLF_live1N, 16220)));
     if(GLF_live7i == 2)
      {
       GLF_live7obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live7i, 10)] = 5;
      }
     else
      if(GLF_live7i == 3)
       {
        GLF_live7obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live7i, 10)] = 7;
       }
      else
       if(GLF_live7i == 4)
        {
         GLF_live7obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live7i, 10)] = 11;
        }
       else
        if(GLF_live7i == 5)
         {
          GLF_live7obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live7i, 10)] = 13;
         }
        else
         if(GLF_live7i == 6)
          {
           GLF_live7obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live7i, 10)] = 17;
          }
         else
          if(GLF_live7i == 7)
           {
            GLF_live7obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live7i, 10)] = 19;
           }
          else
           if(GLF_live7i == 8)
            {
             GLF_live7obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live7i, 10)] = 23;
            }
           else
            if(GLF_live7i == 9)
             {
              GLF_live7obj.prime_numbers[_GLF_MAKE_IN_BOUNDS_INT(GLF_live7i, 10)] = 29;
             }
    }
    if(GLF_live1_looplimiter4 >= 7)
     {
      break;
     }
    GLF_live1_looplimiter4 ++;
    {
     int GLF_live1_looplimiter3 = 0;
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      {
       vec2 donor_replacementGLF_dead1uv = _GLF_FUZZED(injectionSwitch);
       if(donor_replacementGLF_dead1uv.y > (3.0 / 4.0))
        {
         point1.z += float(GLF_dead1obj.numbers[7]);
        }
       {
        int GLF_live7_looplimiter5 = 0;
        if(GLF_live7_looplimiter5 >= 5)
         {
          1;
         }
       }
       {
        vec4 _GLF_outVarBackup_GLF_color;
        _GLF_outVarBackup_GLF_color = _GLF_color;
        _GLF_color = vec4(-7695.4581, 9.3, 92.50, 892.988).ggab;
        if(_GLF_WRAPPED_IF_TRUE(true))
         {
          _GLF_color = _GLF_outVarBackup_GLF_color;
         }
       }
      }
     for(int GLF_live1i = GLF_live1low; GLF_live1i < GLF_live1high; GLF_live1i += 2 * GLF_live1m)
      {
       if(GLF_live1_looplimiter3 >= 7)
        {
         break;
        }
       GLF_live1_looplimiter3 ++;
       int GLF_live1from = GLF_live1i;
       int GLF_live1mid = GLF_live1i + GLF_live1m - 1;
       int GLF_live1to = min(GLF_live1i + 2 * GLF_live1m - 1, GLF_live1high);
       if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        {
        }
       else
        {
         GLF_live1merge(GLF_live1from, GLF_live1mid, GLF_live1to);
        }
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        {
         vec2 donor_replacementGLF_dead7position = _GLF_FUZZED(acosh(injectionSwitch));
         if(_GLF_WRAPPED_IF_FALSE(false))
          {
          }
         else
          {
           if(abs(donor_replacementGLF_dead7position.y - donor_replacementGLF_dead7position.x) < 0.5)
            {
             {
              int GLF_live6treeIndex = _GLF_FUZZED(GLF_live1N);
              int GLF_live6data = _GLF_FUZZED(51837);
              {
               int GLF_live6baseIndex = 0;
               {
                int GLF_live6_looplimiter0 = 0;
                while(GLF_live6baseIndex <= GLF_live6treeIndex)
                 {
                  if(GLF_live6_looplimiter0 >= 6)
                   {
                    break;
                   }
                  GLF_live6_looplimiter0 ++;
                  if(GLF_live6data <= GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6baseIndex, 10)].data)
                   {
                    if(GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6baseIndex, 10)].leftIndex == - 1)
                     {
                      GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6baseIndex, 10)].leftIndex = GLF_live6treeIndex;
                      GLF_live6makeTreeNode(GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6treeIndex, 10)], GLF_live6data);
                      1;
                     }
                    else
                     {
                      GLF_live6baseIndex = GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6baseIndex, 10)].leftIndex;
                      continue;
                     }
                   }
                  else
                   {
                    if(GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6baseIndex, 10)].rightIndex == - 1)
                     {
                      GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6baseIndex, 10)].rightIndex = GLF_live6treeIndex;
                      GLF_live6makeTreeNode(GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6treeIndex, 10)], GLF_live6data);
                      1;
                     }
                    else
                     {
                      GLF_live6baseIndex = GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6baseIndex, 10)].rightIndex;
                      continue;
                     }
                   }
                 }
               }
              }
             }
             GLF_dead7b_b = clamp(0.0, 1.0, GLF_dead7b_b * 3.0);
             {
              float GLF_live5sums[9] = _GLF_FUZZED(float[9](9063.2688, (- 673.826), 1.5, 1.1, (vec2(3897.7531, -2.9).t), 530.528, 8.8, -99.74, -663.432));
              int GLF_live5c = _GLF_FUZZED(ivec4(-16529, 79975, -65238, 38315).p);
              int GLF_live5_looplimiter28 = 0;
              int GLF_live5r = _GLF_FUZZED(-98999);
              {
               if(GLF_live5_looplimiter28 >= 6)
                {
                 1;
                }
               for(int _injected_loop_counter = 0; _GLF_WRAPPED_LOOP(_injected_loop_counter < 1); _injected_loop_counter ++)
                {
                 GLF_live5_looplimiter28 ++;
                }
               GLF_live5sums[5] += GLF_live5m34[_GLF_MAKE_IN_BOUNDS_INT(GLF_live5c, 3)][_GLF_MAKE_IN_BOUNDS_INT(GLF_live5r, 4)];
              }
             }
            }
          }
        }
      }
     {
      bool GLF_live4c6 = _GLF_FUZZED((bvec4(true, false, false, false) == bvec4(true, true, true, true)));
      int GLF_live4msb8 = _GLF_FUZZED(GLF_live1N);
      vec3 GLF_live4setting = _GLF_FUZZED(vec3(8.5));
      vec2 GLF_live4pos = _GLF_FUZZED((9303.1479 - vec2(-62.04, -4.0)));
      if(! GLF_live4c6)
       {
        GLF_live4computeColor(GLF_live4setting.z / (5.0 * float(findMSB(GLF_live4msb8))), GLF_live4pos);
       }
     }
    }
   }
 }
 if(_GLF_WRAPPED_IF_FALSE(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
  }
 else
  {
   point1 = computePoint(rotationMatrix);
  }
 mat2 rotationMatrix2;
 rotationMatrix2 = rotationMatrix * rotationMatrix;
 vec3 point2;
 point2 = computePoint(rotationMatrix2);
 mat2 rotationMatrix3;
 {
  int GLF_live6target = _GLF_FUZZED(-65669);
  int GLF_live6_looplimiter1 = 0;
  GLF_live6BST GLF_live6currentNode = _GLF_FUZZED(GLF_live6BST(GLF_live1N, int(true), (GLF_live1N >> GLF_live1N)));
  int GLF_live6index = _GLF_FUZZED(41433);
  {
   if(GLF_live6_looplimiter1 >= 6)
    {
     1;
    }
   GLF_live6_looplimiter1 ++;
   GLF_live6currentNode = GLF_live6tree[_GLF_MAKE_IN_BOUNDS_INT(GLF_live6index, 10)];
   if(GLF_live6currentNode.data == GLF_live6target)
    {
     GLF_live6target;
    }
   GLF_live6index = GLF_live6target > GLF_live6currentNode.data ? GLF_live6currentNode.rightIndex : GLF_live6currentNode.leftIndex;
  }
 }
 rotationMatrix3 = rotationMatrix * rotationMatrix * rotationMatrix;
 vec3 point3;
 {
  int GLF_live0cols = _GLF_FUZZED(-36947);
  uint GLF_live0matrix_number = _GLF_FUZZED(164057u);
  {
   int GLF_live0_looplimiter2 = 0;
   for(int GLF_live0rows = 2; GLF_live0rows <= 4; GLF_live0rows ++)
    {
     if(GLF_live0_looplimiter2 >= 3)
      {
       break;
      }
     GLF_live0_looplimiter2 ++;
     {
      int GLF_live0_looplimiter1 = 0;
      for(int GLF_live0c = 0; GLF_live0c < GLF_live0cols; GLF_live0c ++)
       {
        if(GLF_live0_looplimiter1 >= 3)
         {
          break;
         }
        GLF_live0_looplimiter1 ++;
        {
         int GLF_live0_looplimiter0 = 0;
         for(int GLF_live0r = 0; GLF_live0r < GLF_live0rows; GLF_live0r ++)
          {
           if(GLF_live0_looplimiter0 >= 3)
            {
             break;
            }
           {
            vec4 _GLF_outVarBackup_GLF_color;
            _GLF_outVarBackup_GLF_color = _GLF_color;
            _GLF_color = vec4(508.653, -9056.2094, 1.5, 6001.4956);
            if(_GLF_WRAPPED_IF_TRUE(true))
             {
              _GLF_color = _GLF_outVarBackup_GLF_color;
              {
               int GLF_live4msb8 = _GLF_FUZZED((ivec3(90524, -31005, 80210).p / (GLF_live1N | 21149)));
               {
                GLF_live4b_b = clamp(float(bitfieldExtract(int(GLF_live4resolution.x), 0, 0)), float(bitCount(GLF_live4msb8)), GLF_live4b_b * float(bitCount(GLF_live4msb8)) * 3.0);
               }
              }
             }
           }
           GLF_live0_looplimiter0 ++;
           switch(GLF_live0matrix_number)
            {
             case 0u:
             GLF_live0m22[_GLF_MAKE_IN_BOUNDS_INT(GLF_live0c, 2)][_GLF_MAKE_IN_BOUNDS_INT(GLF_live0r, 2)] = GLF_live0one;
             break;
             case 1u:
             GLF_live0m23[_GLF_MAKE_IN_BOUNDS_INT(GLF_live0c, 2)][_GLF_MAKE_IN_BOUNDS_INT(GLF_live0r, 3)] = GLF_live0one;
             break;
             case 2u:
             GLF_live0m24[_GLF_MAKE_IN_BOUNDS_INT(GLF_live0c, 2)][_GLF_MAKE_IN_BOUNDS_INT(GLF_live0r, 4)] = GLF_live0one;
             break;
             case 3u:
             do
              {
               GLF_live0m32[_GLF_MAKE_IN_BOUNDS_INT(GLF_live0c, 3)][_GLF_MAKE_IN_BOUNDS_INT(GLF_live0r, 2)] = GLF_live0one;
              }
             while(_GLF_WRAPPED_LOOP(false));
             break;
             case 4u:
             GLF_live0m33[_GLF_MAKE_IN_BOUNDS_INT(GLF_live0c, 3)][_GLF_MAKE_IN_BOUNDS_INT(GLF_live0r, 3)] = GLF_live0one;
             {
              int GLF_live7_looplimiter1 = 0;
              if(GLF_live7_looplimiter1 >= 5)
               {
                1;
               }
             }
             break;
             case 5u:
             GLF_live0m34[_GLF_MAKE_IN_BOUNDS_INT(GLF_live0c, 3)][_GLF_MAKE_IN_BOUNDS_INT(GLF_live0r, 4)] = GLF_live0one;
             break;
             case 6u:
             GLF_live0m42[_GLF_MAKE_IN_BOUNDS_INT(GLF_live0c, 4)][_GLF_MAKE_IN_BOUNDS_INT(GLF_live0r, 2)] = GLF_live0one;
             {
              vec4 _GLF_outVarBackup_GLF_color;
              _GLF_outVarBackup_GLF_color = _GLF_color;
              _GLF_color = vec4(-9.8, 4718.8346, 5.8, -32.82);
              if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
               {
                _GLF_color = _GLF_outVarBackup_GLF_color;
               }
             }
             break;
             case 7u:
             GLF_live0m43[_GLF_MAKE_IN_BOUNDS_INT(GLF_live0c, 4)][_GLF_MAKE_IN_BOUNDS_INT(GLF_live0r, 3)] = GLF_live0one;
             break;
             case 8u:
             GLF_live0m44[_GLF_MAKE_IN_BOUNDS_INT(GLF_live0c, 4)][_GLF_MAKE_IN_BOUNDS_INT(GLF_live0r, 4)] = GLF_live0one;
             break;
            }
          }
        }
       }
     }
     GLF_live0matrix_number = GLF_live0matrix_number + 1u;
    }
  }
 }
 point3 = computePoint(rotationMatrix3);
 vec3 mixed;
 mixed = mix(point1, point2, vec3(0.3));
 mixed = mix(mixed, point3, vec3(0.3));
 if(_GLF_DEAD(false))
  {
   for(int GLF_dead5i = 1; GLF_dead5i < 800; GLF_dead5i ++)
    {
     {
      vec4 _GLF_outVarBackup_GLF_color;
      _GLF_outVarBackup_GLF_color = _GLF_color;
      _GLF_color = acos(refract((vec2(-5.9, 771.785) * mat4x2(16.57, 6.8, -25.48, -8.3, 590.487, -5.0, 6.9, -69.96)), vec4(64.47, 986.864, 9.9, 7.5), 884.545));
      if(_GLF_WRAPPED_IF_TRUE(_GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))
       {
        _GLF_color = _GLF_outVarBackup_GLF_color;
       }
     }
     if((GLF_dead5i % 32) == 0)
      {
       b_b += 0.4;
      }
     else
      if(mod(float(GLF_dead5i), round(angle)) <= 0.01)
       {
        b_b += 100.0;
       }
     if(float(GLF_dead5i) >= angle)
      {
       b_b;
      }
    }
  }
 _GLF_color = vec4(mixed, float(bitCount(msb8)));
}
