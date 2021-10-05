; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 167
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %34 %83
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "arr"
               OpName %16 "v"
               OpName %19 "buf0"
               OpMemberName %19 0 "_GLF_uniform_int_values"
               OpName %21 ""
               OpName %29 "b"
               OpName %34 "_GLF_color"
               OpName %53 "i"
               OpName %62 "j"
               OpName %83 "gl_FragCoord"
               OpName %89 "buf1"
               OpMemberName %89 0 "_GLF_uniform_float_values"
               OpName %91 ""
               OpDecorate %18 ArrayStride 16
               OpMemberDecorate %19 0 Offset 0
               OpDecorate %19 Block
               OpDecorate %21 DescriptorSet 0
               OpDecorate %21 Binding 0
               OpDecorate %34 Location 0
               OpDecorate %83 BuiltIn FragCoord
               OpDecorate %88 ArrayStride 16
               OpMemberDecorate %89 0 Offset 0
               OpDecorate %89 Block
               OpDecorate %91 DescriptorSet 0
               OpDecorate %91 Binding 1
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 64
          %9 = OpTypeArray %6 %8
         %10 = OpTypePointer Private %9
         %11 = OpVariable %10 Private
         %12 = OpConstant %6 1
         %13 = OpConstantComposite %9 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12 %12
         %14 = OpTypeVector %6 2
         %15 = OpTypePointer Function %14
         %17 = OpConstant %7 3
         %18 = OpTypeArray %6 %17
         %19 = OpTypeStruct %18
         %20 = OpTypePointer Uniform %19
         %21 = OpVariable %20 Uniform
         %22 = OpConstant %6 0
         %23 = OpTypePointer Uniform %6
         %27 = OpTypeBool
         %28 = OpTypePointer Function %27
         %30 = OpConstantFalse %27
         %31 = OpTypeFloat 32
         %32 = OpTypeVector %31 4
         %33 = OpTypePointer Output %32
         %34 = OpVariable %33 Output
         %43 = OpConstant %7 0
         %44 = OpTypePointer Function %6
         %60 = OpConstant %6 8
         %71 = OpTypePointer Private %6
         %82 = OpTypePointer Input %32
         %83 = OpVariable %82 Input
         %84 = OpTypePointer Input %31
         %87 = OpConstant %7 2
         %88 = OpTypeArray %31 %87
         %89 = OpTypeStruct %88
         %90 = OpTypePointer Uniform %89
         %91 = OpVariable %90 Uniform
         %92 = OpTypePointer Uniform %31
         %99 = OpConstantTrue %27
        %100 = OpConstant %7 1
        %146 = OpConstant %6 2
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %16 = OpVariable %15 Function
         %29 = OpVariable %28 Function
         %53 = OpVariable %44 Function
         %62 = OpVariable %44 Function
               OpStore %11 %13
         %24 = OpAccessChain %23 %21 %22 %12
         %25 = OpLoad %6 %24
         %26 = OpCompositeConstruct %14 %25 %25
               OpStore %16 %26
               OpStore %29 %30
         %35 = OpAccessChain %23 %21 %22 %12
         %36 = OpLoad %6 %35
         %37 = OpConvertSToF %31 %36
         %38 = OpCompositeConstruct %32 %37 %37 %37 %37
               OpStore %34 %38
               OpBranch %39
         %39 = OpLabel
               OpLoopMerge %41 %42 None
               OpBranch %40
         %40 = OpLabel
         %45 = OpAccessChain %44 %16 %43
         %46 = OpLoad %6 %45
         %47 = OpAccessChain %23 %21 %22 %12
         %48 = OpLoad %6 %47
         %49 = OpSGreaterThan %27 %46 %48
               OpSelectionMerge %51 None
               OpBranchConditional %49 %50 %51
         %50 = OpLabel
               OpBranch %41
         %51 = OpLabel
               OpStore %53 %12
               OpBranch %54
         %54 = OpLabel
               OpLoopMerge %56 %57 None
               OpBranch %58
         %58 = OpLabel
         %59 = OpLoad %6 %53
         %61 = OpSLessThan %27 %59 %60
               OpBranchConditional %61 %55 %56
         %55 = OpLabel
               OpStore %62 %12
               OpBranch %63
         %63 = OpLabel
               OpLoopMerge %65 %66 None
               OpBranch %67
         %67 = OpLabel
         %68 = OpLoad %6 %62
         %69 = OpSLessThan %27 %68 %60
               OpBranchConditional %69 %64 %65
         %64 = OpLabel
         %70 = OpLoad %6 %53
         %72 = OpAccessChain %71 %11 %70
         %73 = OpLoad %6 %72
         %74 = OpAccessChain %23 %21 %22 %12
         %75 = OpLoad %6 %74
         %76 = OpIEqual %27 %73 %75
               OpSelectionMerge %78 None
               OpBranchConditional %76 %77 %78
         %77 = OpLabel
         %79 = OpLoad %6 %62
         %80 = OpLoad %6 %53
         %81 = OpCompositeConstruct %14 %79 %80
               OpStore %16 %81
         %85 = OpAccessChain %84 %83 %43
         %86 = OpLoad %31 %85
         %93 = OpAccessChain %92 %91 %22 %12
         %94 = OpLoad %31 %93
         %95 = OpFOrdLessThan %27 %86 %94
               OpSelectionMerge %97 None
               OpBranchConditional %95 %96 %97
         %96 = OpLabel
               OpBranch %66
         %97 = OpLabel
               OpStore %29 %99
        %101 = OpAccessChain %84 %83 %100
        %102 = OpLoad %31 %101
        %103 = OpAccessChain %92 %91 %22 %12
        %104 = OpLoad %31 %103
        %105 = OpFOrdLessThan %27 %102 %104
               OpSelectionMerge %107 None
               OpBranchConditional %105 %106 %107
        %106 = OpLabel
        %108 = OpAccessChain %23 %21 %22 %22
        %109 = OpLoad %6 %108
        %110 = OpConvertSToF %31 %109
        %111 = OpCompositeConstruct %32 %110 %110 %110 %110
               OpStore %34 %111
        %112 = OpAccessChain %84 %83 %100
        %113 = OpLoad %31 %112
        %114 = OpAccessChain %92 %91 %22 %22
        %115 = OpLoad %31 %114
        %116 = OpFOrdLessThan %27 %113 %115
               OpSelectionMerge %118 None
               OpBranchConditional %116 %117 %118
        %117 = OpLabel
        %119 = OpAccessChain %84 %83 %100
        %120 = OpLoad %31 %119
        %121 = OpAccessChain %92 %91 %22 %22
        %122 = OpLoad %31 %121
        %123 = OpFOrdGreaterThanEqual %27 %120 %122
               OpSelectionMerge %125 None
               OpBranchConditional %123 %124 %125
        %124 = OpLabel
        %126 = OpAccessChain %92 %91 %22 %22
        %127 = OpLoad %31 %126
        %128 = OpCompositeConstruct %32 %127 %127 %127 %127
               OpStore %34 %128
               OpBranch %125
        %125 = OpLabel
               OpReturn
        %118 = OpLabel
               OpBranch %107
        %107 = OpLabel
               OpBranch %78
         %78 = OpLabel
               OpBranch %66
         %66 = OpLabel
        %130 = OpLoad %6 %62
        %131 = OpIAdd %6 %130 %12
               OpStore %62 %131
               OpBranch %63
         %65 = OpLabel
               OpBranch %57
         %57 = OpLabel
        %132 = OpLoad %6 %53
        %133 = OpIAdd %6 %132 %12
               OpStore %53 %133
               OpBranch %54
         %56 = OpLabel
        %134 = OpAccessChain %44 %16 %43
        %135 = OpLoad %6 %134
        %136 = OpAccessChain %44 %16 %100
        %137 = OpLoad %6 %136
        %138 = OpIAdd %6 %135 %137
        %139 = OpAccessChain %23 %21 %22 %12
        %140 = OpLoad %6 %139
        %141 = OpAccessChain %71 %11 %138
               OpStore %141 %140
        %142 = OpAccessChain %23 %21 %22 %12
        %143 = OpLoad %6 %142
        %144 = OpAccessChain %71 %11 %143
        %145 = OpLoad %6 %144
        %147 = OpAccessChain %23 %21 %22 %146
        %148 = OpLoad %6 %147
        %149 = OpIEqual %27 %145 %148
               OpSelectionMerge %151 None
               OpBranchConditional %149 %150 %151
        %150 = OpLabel
               OpKill
        %151 = OpLabel
               OpBranch %42
         %42 = OpLabel
        %153 = OpLoad %27 %29
               OpBranchConditional %153 %39 %41
         %41 = OpLabel
        %154 = OpAccessChain %23 %21 %22 %12
        %155 = OpLoad %6 %154
        %156 = OpConvertSToF %31 %155
        %157 = OpAccessChain %23 %21 %22 %22
        %158 = OpLoad %6 %157
        %159 = OpConvertSToF %31 %158
        %160 = OpAccessChain %23 %21 %22 %22
        %161 = OpLoad %6 %160
        %162 = OpConvertSToF %31 %161
        %163 = OpAccessChain %23 %21 %22 %12
        %164 = OpLoad %6 %163
        %165 = OpConvertSToF %31 %164
        %166 = OpCompositeConstruct %32 %156 %159 %162 %165
               OpStore %34 %166
               OpReturn
               OpFunctionEnd
