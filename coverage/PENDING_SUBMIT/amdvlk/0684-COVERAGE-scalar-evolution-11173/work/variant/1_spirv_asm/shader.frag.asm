; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 119
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %78
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "arr"
               OpName %14 "buf0"
               OpMemberName %14 0 "_GLF_uniform_int_values"
               OpName %16 ""
               OpName %34 "ref"
               OpName %47 "i"
               OpName %78 "_GLF_color"
               OpName %92 "i"
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 0
               OpDecorate %78 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 5
          %9 = OpTypeArray %6 %8
         %10 = OpTypePointer Function %9
         %12 = OpConstant %7 6
         %13 = OpTypeArray %6 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpConstant %6 0
         %18 = OpTypePointer Uniform %6
         %21 = OpConstant %6 1
         %24 = OpConstant %6 2
         %27 = OpConstant %6 3
         %30 = OpConstant %6 4
         %46 = OpTypePointer Function %6
         %54 = OpConstant %6 5
         %55 = OpTypeBool
         %75 = OpTypeFloat 32
         %76 = OpTypeVector %75 4
         %77 = OpTypePointer Output %76
         %78 = OpVariable %77 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %34 = OpVariable %10 Function
         %47 = OpVariable %46 Function
         %92 = OpVariable %46 Function
         %19 = OpAccessChain %18 %16 %17 %17
         %20 = OpLoad %6 %19
         %22 = OpAccessChain %18 %16 %17 %21
         %23 = OpLoad %6 %22
         %25 = OpAccessChain %18 %16 %17 %24
         %26 = OpLoad %6 %25
         %28 = OpAccessChain %18 %16 %17 %27
         %29 = OpLoad %6 %28
         %31 = OpAccessChain %18 %16 %17 %30
         %32 = OpLoad %6 %31
         %33 = OpCompositeConstruct %9 %20 %23 %26 %29 %32
               OpStore %11 %33
         %35 = OpAccessChain %18 %16 %17 %17
         %36 = OpLoad %6 %35
         %37 = OpAccessChain %18 %16 %17 %21
         %38 = OpLoad %6 %37
         %39 = OpAccessChain %18 %16 %17 %24
         %40 = OpLoad %6 %39
         %41 = OpAccessChain %18 %16 %17 %21
         %42 = OpLoad %6 %41
         %43 = OpAccessChain %18 %16 %17 %21
         %44 = OpLoad %6 %43
         %45 = OpCompositeConstruct %9 %36 %38 %40 %42 %44
               OpStore %34 %45
               OpStore %47 %17
               OpBranch %48
         %48 = OpLabel
               OpLoopMerge %50 %51 None
               OpBranch %52
         %52 = OpLabel
         %53 = OpLoad %6 %47
         %56 = OpSLessThan %55 %53 %54
               OpBranchConditional %56 %49 %50
         %49 = OpLabel
         %57 = OpAccessChain %18 %16 %17 %17
         %58 = OpLoad %6 %57
         %59 = OpAccessChain %18 %16 %17 %21
         %60 = OpLoad %6 %59
         %61 = OpSLessThan %55 %58 %60
               OpSelectionMerge %63 None
               OpBranchConditional %61 %62 %63
         %62 = OpLabel
         %64 = OpLoad %6 %47
         %65 = OpIAdd %6 %64 %21
               OpStore %47 %65
               OpBranch %63
         %63 = OpLabel
         %66 = OpLoad %6 %47
         %67 = OpExtInst %6 %1 SClamp %66 %17 %30
         %68 = OpAccessChain %18 %16 %17 %21
         %69 = OpLoad %6 %68
         %70 = OpAccessChain %46 %11 %69
         %71 = OpLoad %6 %70
         %72 = OpAccessChain %46 %11 %67
               OpStore %72 %71
               OpBranch %51
         %51 = OpLabel
         %73 = OpLoad %6 %47
         %74 = OpIAdd %6 %73 %21
               OpStore %47 %74
               OpBranch %48
         %50 = OpLabel
         %79 = OpAccessChain %18 %16 %17 %21
         %80 = OpLoad %6 %79
         %81 = OpConvertSToF %75 %80
         %82 = OpAccessChain %18 %16 %17 %17
         %83 = OpLoad %6 %82
         %84 = OpConvertSToF %75 %83
         %85 = OpAccessChain %18 %16 %17 %17
         %86 = OpLoad %6 %85
         %87 = OpConvertSToF %75 %86
         %88 = OpAccessChain %18 %16 %17 %21
         %89 = OpLoad %6 %88
         %90 = OpConvertSToF %75 %89
         %91 = OpCompositeConstruct %76 %81 %84 %87 %90
               OpStore %78 %91
         %93 = OpAccessChain %18 %16 %17 %17
         %94 = OpLoad %6 %93
               OpStore %92 %94
               OpBranch %95
         %95 = OpLabel
               OpLoopMerge %97 %98 None
               OpBranch %99
         %99 = OpLabel
        %100 = OpLoad %6 %92
        %101 = OpAccessChain %18 %16 %17 %54
        %102 = OpLoad %6 %101
        %103 = OpSLessThan %55 %100 %102
               OpBranchConditional %103 %96 %97
         %96 = OpLabel
        %104 = OpLoad %6 %92
        %105 = OpAccessChain %46 %11 %104
        %106 = OpLoad %6 %105
        %107 = OpLoad %6 %92
        %108 = OpAccessChain %46 %34 %107
        %109 = OpLoad %6 %108
        %110 = OpINotEqual %55 %106 %109
               OpSelectionMerge %112 None
               OpBranchConditional %110 %111 %112
        %111 = OpLabel
        %113 = OpAccessChain %18 %16 %17 %17
        %114 = OpLoad %6 %113
        %115 = OpConvertSToF %75 %114
        %116 = OpCompositeConstruct %76 %115 %115 %115 %115
               OpStore %78 %116
               OpBranch %112
        %112 = OpLabel
               OpBranch %98
         %98 = OpLabel
        %117 = OpLoad %6 %92
        %118 = OpIAdd %6 %117 %21
               OpStore %92 %118
               OpBranch %95
         %97 = OpLabel
               OpReturn
               OpFunctionEnd
