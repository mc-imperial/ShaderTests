; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 185
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %100 %166
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %10 "func0(i1;"
               OpName %9 "x"
               OpName %12 "func1("
               OpName %18 "m"
               OpName %33 "buf2"
               OpMemberName %33 0 "one"
               OpName %35 ""
               OpName %43 "buf0"
               OpMemberName %43 0 "_GLF_uniform_float_values"
               OpName %45 ""
               OpName %61 "i"
               OpName %73 "buf1"
               OpMemberName %73 0 "_GLF_uniform_int_values"
               OpName %75 ""
               OpName %100 "gl_FragCoord"
               OpName %108 "param"
               OpName %166 "_GLF_color"
               OpMemberDecorate %33 0 Offset 0
               OpDecorate %33 Block
               OpDecorate %35 DescriptorSet 0
               OpDecorate %35 Binding 2
               OpDecorate %42 ArrayStride 16
               OpMemberDecorate %43 0 Offset 0
               OpDecorate %43 Block
               OpDecorate %45 DescriptorSet 0
               OpDecorate %45 Binding 0
               OpDecorate %72 ArrayStride 16
               OpMemberDecorate %73 0 Offset 0
               OpDecorate %73 Block
               OpDecorate %75 DescriptorSet 0
               OpDecorate %75 Binding 1
               OpDecorate %100 BuiltIn FragCoord
               OpDecorate %166 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %8 = OpTypeFunction %2 %7
         %14 = OpTypeFloat 32
         %15 = OpTypeVector %14 2
         %16 = OpTypeMatrix %15 4
         %17 = OpTypePointer Private %16
         %18 = OpVariable %17 Private
         %19 = OpConstant %14 0
         %20 = OpConstantComposite %15 %19 %19
         %21 = OpConstantComposite %16 %20 %20 %20 %20
         %22 = OpTypeBool
         %24 = OpConstant %6 1
         %33 = OpTypeStruct %14
         %34 = OpTypePointer Uniform %33
         %35 = OpVariable %34 Uniform
         %36 = OpConstant %6 0
         %37 = OpTypePointer Uniform %14
         %40 = OpTypeInt 32 0
         %41 = OpConstant %40 1
         %42 = OpTypeArray %14 %41
         %43 = OpTypeStruct %42
         %44 = OpTypePointer Uniform %43
         %45 = OpVariable %44 Uniform
         %68 = OpConstant %6 2
         %71 = OpConstant %40 4
         %72 = OpTypeArray %6 %71
         %73 = OpTypeStruct %72
         %74 = OpTypePointer Uniform %73
         %75 = OpVariable %74 Uniform
         %76 = OpTypePointer Uniform %6
         %81 = OpConstant %6 3
         %91 = OpTypePointer Private %14
         %98 = OpTypeVector %14 4
         %99 = OpTypePointer Input %98
        %100 = OpVariable %99 Input
        %101 = OpTypePointer Input %14
        %137 = OpConstant %14 1
        %145 = OpTypeVector %22 2
        %165 = OpTypePointer Output %98
        %166 = OpVariable %165 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
               OpStore %18 %21
        %110 = OpFunctionCall %2 %12
        %111 = OpFunctionCall %2 %12
        %112 = OpLoad %16 %18
        %113 = OpAccessChain %76 %75 %36 %36
        %114 = OpLoad %6 %113
        %115 = OpConvertSToF %14 %114
        %116 = OpAccessChain %76 %75 %36 %36
        %117 = OpLoad %6 %116
        %118 = OpConvertSToF %14 %117
        %119 = OpAccessChain %76 %75 %36 %24
        %120 = OpLoad %6 %119
        %121 = OpConvertSToF %14 %120
        %122 = OpAccessChain %76 %75 %36 %24
        %123 = OpLoad %6 %122
        %124 = OpConvertSToF %14 %123
        %125 = OpAccessChain %76 %75 %36 %36
        %126 = OpLoad %6 %125
        %127 = OpConvertSToF %14 %126
        %128 = OpAccessChain %76 %75 %36 %36
        %129 = OpLoad %6 %128
        %130 = OpConvertSToF %14 %129
        %131 = OpAccessChain %76 %75 %36 %36
        %132 = OpLoad %6 %131
        %133 = OpConvertSToF %14 %132
        %134 = OpAccessChain %76 %75 %36 %36
        %135 = OpLoad %6 %134
        %136 = OpConvertSToF %14 %135
        %138 = OpCompositeConstruct %15 %115 %118
        %139 = OpCompositeConstruct %15 %121 %124
        %140 = OpCompositeConstruct %15 %127 %130
        %141 = OpCompositeConstruct %15 %133 %136
        %142 = OpCompositeConstruct %16 %138 %139 %140 %141
        %143 = OpCompositeExtract %15 %112 0
        %144 = OpCompositeExtract %15 %142 0
        %146 = OpFOrdEqual %145 %143 %144
        %147 = OpAll %22 %146
        %148 = OpCompositeExtract %15 %112 1
        %149 = OpCompositeExtract %15 %142 1
        %150 = OpFOrdEqual %145 %148 %149
        %151 = OpAll %22 %150
        %152 = OpLogicalAnd %22 %147 %151
        %153 = OpCompositeExtract %15 %112 2
        %154 = OpCompositeExtract %15 %142 2
        %155 = OpFOrdEqual %145 %153 %154
        %156 = OpAll %22 %155
        %157 = OpLogicalAnd %22 %152 %156
        %158 = OpCompositeExtract %15 %112 3
        %159 = OpCompositeExtract %15 %142 3
        %160 = OpFOrdEqual %145 %158 %159
        %161 = OpAll %22 %160
        %162 = OpLogicalAnd %22 %157 %161
               OpSelectionMerge %164 None
               OpBranchConditional %162 %163 %180
        %163 = OpLabel
        %167 = OpAccessChain %76 %75 %36 %81
        %168 = OpLoad %6 %167
        %169 = OpConvertSToF %14 %168
        %170 = OpAccessChain %76 %75 %36 %36
        %171 = OpLoad %6 %170
        %172 = OpConvertSToF %14 %171
        %173 = OpAccessChain %76 %75 %36 %36
        %174 = OpLoad %6 %173
        %175 = OpConvertSToF %14 %174
        %176 = OpAccessChain %76 %75 %36 %81
        %177 = OpLoad %6 %176
        %178 = OpConvertSToF %14 %177
        %179 = OpCompositeConstruct %98 %169 %172 %175 %178
               OpStore %166 %179
               OpBranch %164
        %180 = OpLabel
        %181 = OpAccessChain %76 %75 %36 %36
        %182 = OpLoad %6 %181
        %183 = OpConvertSToF %14 %182
        %184 = OpCompositeConstruct %98 %183 %183 %183 %183
               OpStore %166 %184
               OpBranch %164
        %164 = OpLabel
               OpReturn
               OpFunctionEnd
         %10 = OpFunction %2 None %8
          %9 = OpFunctionParameter %7
         %11 = OpLabel
         %61 = OpVariable %7 Function
         %23 = OpLoad %6 %9
         %25 = OpSLessThan %22 %23 %24
         %26 = OpLogicalNot %22 %25
               OpSelectionMerge %28 None
               OpBranchConditional %26 %27 %28
         %27 = OpLabel
         %29 = OpLoad %6 %9
         %30 = OpSGreaterThan %22 %29 %24
               OpSelectionMerge %32 None
               OpBranchConditional %30 %31 %32
         %31 = OpLabel
         %38 = OpAccessChain %37 %35 %36
         %39 = OpLoad %14 %38
         %46 = OpAccessChain %37 %45 %36 %36
         %47 = OpLoad %14 %46
         %48 = OpFOrdGreaterThan %22 %39 %47
               OpBranch %32
         %32 = OpLabel
         %49 = OpPhi %22 %30 %27 %48 %31
               OpBranch %28
         %28 = OpLabel
         %50 = OpPhi %22 %25 %11 %49 %32
               OpSelectionMerge %52 None
               OpBranchConditional %50 %51 %52
         %51 = OpLabel
               OpReturn
         %52 = OpLabel
         %54 = OpAccessChain %37 %35 %36
         %55 = OpLoad %14 %54
         %56 = OpAccessChain %37 %45 %36 %36
         %57 = OpLoad %14 %56
         %58 = OpFOrdEqual %22 %55 %57
               OpSelectionMerge %60 None
               OpBranchConditional %58 %59 %60
         %59 = OpLabel
               OpStore %61 %36
               OpBranch %62
         %62 = OpLabel
         %67 = OpLoad %6 %61
         %69 = OpSLessThan %22 %67 %68
               OpLoopMerge %64 %63 None
               OpBranchConditional %69 %63 %64
         %63 = OpLabel
         %70 = OpLoad %6 %9
         %77 = OpAccessChain %76 %75 %36 %36
         %78 = OpLoad %6 %77
         %79 = OpAccessChain %76 %75 %36 %68
         %80 = OpLoad %6 %79
         %82 = OpAccessChain %76 %75 %36 %81
         %83 = OpLoad %6 %82
         %84 = OpISub %6 %80 %83
         %85 = OpExtInst %6 %1 SClamp %70 %78 %84
         %86 = OpExtInst %6 %1 SClamp %85 %36 %81
         %87 = OpLoad %6 %61
         %88 = OpExtInst %6 %1 SClamp %87 %36 %24
         %89 = OpAccessChain %37 %45 %36 %36
         %90 = OpLoad %14 %89
         %92 = OpAccessChain %91 %18 %86 %88
         %93 = OpLoad %14 %92
         %94 = OpFAdd %14 %93 %90
         %95 = OpAccessChain %91 %18 %86 %88
               OpStore %95 %94
         %96 = OpLoad %6 %61
         %97 = OpIAdd %6 %96 %24
               OpStore %61 %97
               OpBranch %62
         %64 = OpLabel
               OpBranch %60
         %60 = OpLabel
               OpReturn
               OpFunctionEnd
         %12 = OpFunction %2 None %3
         %13 = OpLabel
        %108 = OpVariable %7 Function
        %102 = OpAccessChain %101 %100 %41
        %103 = OpLoad %14 %102
        %104 = OpFOrdLessThan %22 %103 %19
               OpSelectionMerge %106 None
               OpBranchConditional %104 %105 %106
        %105 = OpLabel
               OpReturn
        %106 = OpLabel
               OpStore %108 %24
        %109 = OpFunctionCall %2 %10 %108
               OpReturn
               OpFunctionEnd
