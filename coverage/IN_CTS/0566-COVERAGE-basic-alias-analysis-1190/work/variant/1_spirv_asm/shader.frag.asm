; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 205
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %9 %55
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "_GLF_color"
               OpName %14 "buf1"
               OpMemberName %14 0 "_GLF_uniform_int_values"
               OpName %16 ""
               OpName %36 "arr"
               OpName %40 "i"
               OpName %55 "gl_FragCoord"
               OpName %62 "buf0"
               OpMemberName %62 0 "_GLF_uniform_float_values"
               OpName %64 ""
               OpName %73 "S"
               OpMemberName %73 0 "unused"
               OpMemberName %73 1 "data"
               OpName %75 "s"
               OpName %119 "j"
               OpName %162 "ref"
               OpName %178 "i"
               OpDecorate %9 Location 0
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 1
               OpDecorate %55 BuiltIn FragCoord
               OpDecorate %61 ArrayStride 16
               OpMemberDecorate %62 0 Offset 0
               OpDecorate %62 Block
               OpDecorate %64 DescriptorSet 0
               OpDecorate %64 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Output %7
          %9 = OpVariable %8 Output
         %10 = OpTypeInt 32 1
         %11 = OpTypeInt 32 0
         %12 = OpConstant %11 4
         %13 = OpTypeArray %10 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpConstant %10 0
         %18 = OpTypePointer Uniform %10
         %22 = OpConstant %10 1
         %33 = OpConstant %11 7
         %34 = OpTypeArray %6 %33
         %35 = OpTypePointer Function %34
         %37 = OpConstant %6 1
         %38 = OpConstantComposite %34 %37 %37 %37 %37 %37 %37 %37
         %39 = OpTypePointer Function %10
         %49 = OpConstant %10 3
         %52 = OpTypeBool
         %54 = OpTypePointer Input %7
         %55 = OpVariable %54 Input
         %56 = OpConstant %11 0
         %57 = OpTypePointer Input %6
         %60 = OpConstant %11 2
         %61 = OpTypeArray %6 %60
         %62 = OpTypeStruct %61
         %63 = OpTypePointer Uniform %62
         %64 = OpVariable %63 Uniform
         %65 = OpTypePointer Uniform %6
         %71 = OpConstant %11 10
         %72 = OpTypeArray %6 %71
         %73 = OpTypeStruct %72 %72
         %74 = OpTypePointer Function %73
        %128 = OpConstant %10 2
        %134 = OpConstant %10 9
        %136 = OpTypePointer Function %6
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %36 = OpVariable %35 Function
         %40 = OpVariable %39 Function
         %75 = OpVariable %74 Function
        %119 = OpVariable %39 Function
        %142 = OpVariable %39 Function
        %162 = OpVariable %35 Function
        %178 = OpVariable %39 Function
         %19 = OpAccessChain %18 %16 %17 %17
         %20 = OpLoad %10 %19
         %21 = OpConvertSToF %6 %20
         %23 = OpAccessChain %18 %16 %17 %22
         %24 = OpLoad %10 %23
         %25 = OpConvertSToF %6 %24
         %26 = OpAccessChain %18 %16 %17 %22
         %27 = OpLoad %10 %26
         %28 = OpConvertSToF %6 %27
         %29 = OpAccessChain %18 %16 %17 %17
         %30 = OpLoad %10 %29
         %31 = OpConvertSToF %6 %30
         %32 = OpCompositeConstruct %7 %21 %25 %28 %31
               OpStore %9 %32
               OpStore %36 %38
         %41 = OpAccessChain %18 %16 %17 %22
         %42 = OpLoad %10 %41
               OpStore %40 %42
               OpBranch %43
         %43 = OpLabel
               OpLoopMerge %45 %46 None
               OpBranch %47
         %47 = OpLabel
         %48 = OpLoad %10 %40
         %50 = OpAccessChain %18 %16 %17 %49
         %51 = OpLoad %10 %50
         %53 = OpSLessThan %52 %48 %51
               OpBranchConditional %53 %44 %45
         %44 = OpLabel
         %58 = OpAccessChain %57 %55 %56
         %59 = OpLoad %6 %58
         %66 = OpAccessChain %65 %64 %17 %22
         %67 = OpLoad %6 %66
         %68 = OpFOrdGreaterThan %52 %59 %67
               OpSelectionMerge %70 None
               OpBranchConditional %68 %69 %70
         %69 = OpLabel
         %76 = OpAccessChain %65 %64 %17 %17
         %77 = OpLoad %6 %76
         %78 = OpAccessChain %65 %64 %17 %17
         %79 = OpLoad %6 %78
         %80 = OpAccessChain %65 %64 %17 %17
         %81 = OpLoad %6 %80
         %82 = OpAccessChain %65 %64 %17 %17
         %83 = OpLoad %6 %82
         %84 = OpAccessChain %65 %64 %17 %17
         %85 = OpLoad %6 %84
         %86 = OpAccessChain %65 %64 %17 %17
         %87 = OpLoad %6 %86
         %88 = OpAccessChain %65 %64 %17 %17
         %89 = OpLoad %6 %88
         %90 = OpAccessChain %65 %64 %17 %17
         %91 = OpLoad %6 %90
         %92 = OpAccessChain %65 %64 %17 %17
         %93 = OpLoad %6 %92
         %94 = OpAccessChain %65 %64 %17 %17
         %95 = OpLoad %6 %94
         %96 = OpCompositeConstruct %72 %77 %79 %81 %83 %85 %87 %89 %91 %93 %95
         %97 = OpAccessChain %65 %64 %17 %17
         %98 = OpLoad %6 %97
         %99 = OpAccessChain %65 %64 %17 %17
        %100 = OpLoad %6 %99
        %101 = OpAccessChain %65 %64 %17 %17
        %102 = OpLoad %6 %101
        %103 = OpAccessChain %65 %64 %17 %17
        %104 = OpLoad %6 %103
        %105 = OpAccessChain %65 %64 %17 %17
        %106 = OpLoad %6 %105
        %107 = OpAccessChain %65 %64 %17 %17
        %108 = OpLoad %6 %107
        %109 = OpAccessChain %65 %64 %17 %17
        %110 = OpLoad %6 %109
        %111 = OpAccessChain %65 %64 %17 %17
        %112 = OpLoad %6 %111
        %113 = OpAccessChain %65 %64 %17 %17
        %114 = OpLoad %6 %113
        %115 = OpAccessChain %65 %64 %17 %17
        %116 = OpLoad %6 %115
        %117 = OpCompositeConstruct %72 %98 %100 %102 %104 %106 %108 %110 %112 %114 %116
        %118 = OpCompositeConstruct %73 %96 %117
               OpStore %75 %118
        %120 = OpAccessChain %18 %16 %17 %22
        %121 = OpLoad %10 %120
               OpStore %119 %121
               OpBranch %122
        %122 = OpLabel
               OpLoopMerge %124 %125 None
               OpBranch %126
        %126 = OpLabel
        %127 = OpLoad %10 %119
        %129 = OpAccessChain %18 %16 %17 %128
        %130 = OpLoad %10 %129
        %131 = OpSLessThan %52 %127 %130
               OpBranchConditional %131 %123 %124
        %123 = OpLabel
        %132 = OpAccessChain %18 %16 %17 %17
        %133 = OpLoad %10 %132
        %135 = OpExtInst %10 %1 SClamp %133 %17 %134
        %137 = OpAccessChain %136 %75 %22 %135
        %138 = OpLoad %6 %137
        %139 = OpAccessChain %65 %64 %17 %22
        %140 = OpLoad %6 %139
        %141 = OpFOrdGreaterThan %52 %138 %140
               OpSelectionMerge %144 None
               OpBranchConditional %141 %143 %147
        %143 = OpLabel
        %145 = OpAccessChain %18 %16 %17 %17
        %146 = OpLoad %10 %145
               OpStore %142 %146
               OpBranch %144
        %147 = OpLabel
        %148 = OpLoad %10 %119
               OpStore %142 %148
               OpBranch %144
        %144 = OpLabel
        %149 = OpLoad %10 %142
        %150 = OpAccessChain %65 %64 %17 %22
        %151 = OpLoad %6 %150
        %152 = OpAccessChain %136 %75 %22 %149
               OpStore %152 %151
        %153 = OpLoad %10 %119
        %154 = OpLoad %10 %119
        %155 = OpAccessChain %136 %75 %22 %154
        %156 = OpLoad %6 %155
        %157 = OpAccessChain %136 %36 %153
               OpStore %157 %156
               OpBranch %125
        %125 = OpLabel
        %158 = OpLoad %10 %119
        %159 = OpIAdd %10 %158 %22
               OpStore %119 %159
               OpBranch %122
        %124 = OpLabel
               OpBranch %70
         %70 = OpLabel
               OpBranch %46
         %46 = OpLabel
        %160 = OpLoad %10 %40
        %161 = OpIAdd %10 %160 %22
               OpStore %40 %161
               OpBranch %43
         %45 = OpLabel
        %163 = OpAccessChain %65 %64 %17 %17
        %164 = OpLoad %6 %163
        %165 = OpAccessChain %65 %64 %17 %22
        %166 = OpLoad %6 %165
        %167 = OpAccessChain %65 %64 %17 %22
        %168 = OpLoad %6 %167
        %169 = OpAccessChain %65 %64 %17 %22
        %170 = OpLoad %6 %169
        %171 = OpAccessChain %65 %64 %17 %22
        %172 = OpLoad %6 %171
        %173 = OpAccessChain %65 %64 %17 %22
        %174 = OpLoad %6 %173
        %175 = OpAccessChain %65 %64 %17 %22
        %176 = OpLoad %6 %175
        %177 = OpCompositeConstruct %34 %164 %166 %168 %170 %172 %174 %176
               OpStore %162 %177
        %179 = OpAccessChain %18 %16 %17 %22
        %180 = OpLoad %10 %179
               OpStore %178 %180
               OpBranch %181
        %181 = OpLabel
               OpLoopMerge %183 %184 None
               OpBranch %185
        %185 = OpLabel
        %186 = OpLoad %10 %178
        %187 = OpAccessChain %18 %16 %17 %128
        %188 = OpLoad %10 %187
        %189 = OpSLessThan %52 %186 %188
               OpBranchConditional %189 %182 %183
        %182 = OpLabel
        %190 = OpLoad %10 %178
        %191 = OpAccessChain %136 %36 %190
        %192 = OpLoad %6 %191
        %193 = OpLoad %10 %178
        %194 = OpAccessChain %136 %162 %193
        %195 = OpLoad %6 %194
        %196 = OpFUnordNotEqual %52 %192 %195
               OpSelectionMerge %198 None
               OpBranchConditional %196 %197 %198
        %197 = OpLabel
        %199 = OpAccessChain %18 %16 %17 %22
        %200 = OpLoad %10 %199
        %201 = OpConvertSToF %6 %200
        %202 = OpCompositeConstruct %7 %201 %201 %201 %201
               OpStore %9 %202
               OpBranch %198
        %198 = OpLabel
               OpBranch %184
        %184 = OpLabel
        %203 = OpLoad %10 %178
        %204 = OpIAdd %10 %203 %22
               OpStore %178 %204
               OpBranch %181
        %183 = OpLabel
               OpReturn
               OpFunctionEnd
