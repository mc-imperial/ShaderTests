; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 133
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %90
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %10 "S"
               OpMemberName %10 0 "data"
               OpName %12 "obj"
               OpName %16 "buf0"
               OpMemberName %16 0 "_GLF_uniform_int_values"
               OpName %18 ""
               OpName %32 "arr"
               OpName %46 "i"
               OpName %59 "a"
               OpName %62 "b"
               OpName %67 "c"
               OpName %90 "_GLF_color"
               OpName %104 "i"
               OpDecorate %15 ArrayStride 16
               OpMemberDecorate %16 0 Offset 0
               OpDecorate %16 Block
               OpDecorate %18 DescriptorSet 0
               OpDecorate %18 Binding 0
               OpDecorate %90 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 5
          %9 = OpTypeArray %6 %8
         %10 = OpTypeStruct %9
         %11 = OpTypePointer Function %10
         %13 = OpConstant %6 1
         %14 = OpConstant %7 4
         %15 = OpTypeArray %6 %14
         %16 = OpTypeStruct %15
         %17 = OpTypePointer Uniform %16
         %18 = OpVariable %17 Uniform
         %19 = OpConstant %6 0
         %20 = OpTypePointer Uniform %6
         %31 = OpTypePointer Function %9
         %33 = OpConstant %6 2
         %45 = OpTypePointer Function %6
         %57 = OpTypeBool
         %87 = OpTypeFloat 32
         %88 = OpTypeVector %87 4
         %89 = OpTypePointer Output %88
         %90 = OpVariable %89 Output
        %120 = OpConstant %6 3
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %12 = OpVariable %11 Function
         %32 = OpVariable %31 Function
         %46 = OpVariable %45 Function
         %59 = OpVariable %45 Function
         %62 = OpVariable %45 Function
         %67 = OpVariable %45 Function
        %104 = OpVariable %45 Function
         %21 = OpAccessChain %20 %18 %19 %13
         %22 = OpLoad %6 %21
         %23 = OpAccessChain %20 %18 %19 %13
         %24 = OpLoad %6 %23
         %25 = OpAccessChain %20 %18 %19 %13
         %26 = OpLoad %6 %25
         %27 = OpAccessChain %20 %18 %19 %13
         %28 = OpLoad %6 %27
         %29 = OpCompositeConstruct %9 %13 %22 %24 %26 %28
         %30 = OpCompositeConstruct %10 %29
               OpStore %12 %30
         %34 = OpAccessChain %20 %18 %19 %33
         %35 = OpLoad %6 %34
         %36 = OpAccessChain %20 %18 %19 %33
         %37 = OpLoad %6 %36
         %38 = OpAccessChain %20 %18 %19 %33
         %39 = OpLoad %6 %38
         %40 = OpAccessChain %20 %18 %19 %33
         %41 = OpLoad %6 %40
         %42 = OpAccessChain %20 %18 %19 %33
         %43 = OpLoad %6 %42
         %44 = OpCompositeConstruct %9 %35 %37 %39 %41 %43
               OpStore %32 %44
         %47 = OpAccessChain %20 %18 %19 %33
         %48 = OpLoad %6 %47
               OpStore %46 %48
               OpBranch %49
         %49 = OpLabel
               OpLoopMerge %51 %52 None
               OpBranch %53
         %53 = OpLabel
         %54 = OpLoad %6 %46
         %55 = OpAccessChain %20 %18 %19 %19
         %56 = OpLoad %6 %55
         %58 = OpSLessThan %57 %54 %56
               OpBranchConditional %58 %50 %51
         %50 = OpLabel
         %60 = OpAccessChain %20 %18 %19 %33
         %61 = OpLoad %6 %60
               OpStore %59 %61
         %63 = OpAccessChain %20 %18 %19 %13
         %64 = OpLoad %6 %63
         %65 = OpAccessChain %45 %32 %64
         %66 = OpLoad %6 %65
               OpStore %62 %66
         %68 = OpAccessChain %20 %18 %19 %13
         %69 = OpLoad %6 %68
               OpStore %67 %69
         %70 = OpLoad %6 %62
         %71 = OpAccessChain %45 %12 %19 %70
         %72 = OpLoad %6 %71
         %73 = OpSLessThanEqual %57 %72 %13
               OpSelectionMerge %75 None
               OpBranchConditional %73 %74 %75
         %74 = OpLabel
         %76 = OpLoad %6 %67
         %77 = OpIAdd %6 %76 %13
               OpStore %67 %77
               OpBranch %75
         %75 = OpLabel
         %78 = OpLoad %6 %59
         %79 = OpLoad %6 %46
         %80 = OpIAdd %6 %78 %79
         %81 = OpLoad %6 %67
         %82 = OpLoad %6 %46
         %83 = OpIAdd %6 %81 %82
         %84 = OpAccessChain %45 %32 %80
               OpStore %84 %83
               OpBranch %52
         %52 = OpLabel
         %85 = OpLoad %6 %46
         %86 = OpIAdd %6 %85 %13
               OpStore %46 %86
               OpBranch %49
         %51 = OpLabel
         %91 = OpAccessChain %20 %18 %19 %13
         %92 = OpLoad %6 %91
         %93 = OpConvertSToF %87 %92
         %94 = OpAccessChain %20 %18 %19 %33
         %95 = OpLoad %6 %94
         %96 = OpConvertSToF %87 %95
         %97 = OpAccessChain %20 %18 %19 %33
         %98 = OpLoad %6 %97
         %99 = OpConvertSToF %87 %98
        %100 = OpAccessChain %20 %18 %19 %13
        %101 = OpLoad %6 %100
        %102 = OpConvertSToF %87 %101
        %103 = OpCompositeConstruct %88 %93 %96 %99 %102
               OpStore %90 %103
        %105 = OpAccessChain %20 %18 %19 %33
        %106 = OpLoad %6 %105
               OpStore %104 %106
               OpBranch %107
        %107 = OpLabel
               OpLoopMerge %109 %110 None
               OpBranch %111
        %111 = OpLabel
        %112 = OpLoad %6 %104
        %113 = OpAccessChain %20 %18 %19 %19
        %114 = OpLoad %6 %113
        %115 = OpSLessThan %57 %112 %114
               OpBranchConditional %115 %108 %109
        %108 = OpLabel
        %116 = OpLoad %6 %104
        %117 = OpAccessChain %45 %32 %116
        %118 = OpLoad %6 %117
        %119 = OpLoad %6 %104
        %121 = OpAccessChain %20 %18 %19 %120
        %122 = OpLoad %6 %121
        %123 = OpIAdd %6 %119 %122
        %124 = OpINotEqual %57 %118 %123
               OpSelectionMerge %126 None
               OpBranchConditional %124 %125 %126
        %125 = OpLabel
        %127 = OpAccessChain %20 %18 %19 %33
        %128 = OpLoad %6 %127
        %129 = OpConvertSToF %87 %128
        %130 = OpCompositeConstruct %88 %129 %129 %129 %129
               OpStore %90 %130
               OpBranch %126
        %126 = OpLabel
               OpBranch %110
        %110 = OpLabel
        %131 = OpLoad %6 %104
        %132 = OpIAdd %6 %131 %13
               OpStore %104 %132
               OpBranch %107
        %109 = OpLabel
               OpReturn
               OpFunctionEnd
