; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 89
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %9
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "_GLF_color"
               OpName %14 "buf0"
               OpMemberName %14 0 "_GLF_uniform_int_values"
               OpName %16 ""
               OpName %25 "i"
               OpName %34 "j"
               OpName %42 "k"
               OpDecorate %9 Location 0
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Output %7
          %9 = OpVariable %8 Output
         %10 = OpTypeInt 32 1
         %11 = OpTypeInt 32 0
         %12 = OpConstant %11 2
         %13 = OpTypeArray %10 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpConstant %10 0
         %18 = OpConstant %10 1
         %19 = OpTypePointer Uniform %10
         %24 = OpTypePointer Function %10
         %32 = OpTypeBool
         %62 = OpConstant %10 2
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %25 = OpVariable %24 Function
         %34 = OpVariable %24 Function
         %42 = OpVariable %24 Function
         %20 = OpAccessChain %19 %16 %17 %18
         %21 = OpLoad %10 %20
         %22 = OpConvertSToF %6 %21
         %23 = OpCompositeConstruct %7 %22 %22 %22 %22
               OpStore %9 %23
               OpStore %25 %18
               OpBranch %26
         %26 = OpLabel
               OpLoopMerge %28 %29 None
               OpBranch %30
         %30 = OpLabel
         %31 = OpLoad %10 %25
         %33 = OpSLessThanEqual %32 %31 %18
               OpBranchConditional %33 %27 %28
         %27 = OpLabel
               OpStore %34 %17
               OpBranch %35
         %35 = OpLabel
               OpLoopMerge %37 %38 None
               OpBranch %39
         %39 = OpLabel
         %40 = OpLoad %10 %34
         %41 = OpSLessThan %32 %40 %18
               OpBranchConditional %41 %36 %37
         %36 = OpLabel
         %43 = OpLoad %10 %25
         %44 = OpLoad %10 %34
         %45 = OpIAdd %10 %43 %44
         %46 = OpIAdd %10 %45 %18
               OpStore %42 %46
               OpBranch %47
         %47 = OpLabel
               OpLoopMerge %49 %50 None
               OpBranch %51
         %51 = OpLabel
         %52 = OpLoad %10 %34
         %53 = OpLoad %10 %25
         %54 = OpIAdd %10 %52 %53
         %55 = OpAccessChain %19 %16 %17 %17
         %56 = OpLoad %10 %55
         %57 = OpSGreaterThanEqual %32 %54 %56
               OpSelectionMerge %59 None
               OpBranchConditional %57 %58 %59
         %58 = OpLabel
         %60 = OpLoad %10 %42
         %61 = OpLoad %10 %34
         %63 = OpLoad %10 %25
         %64 = OpIMul %10 %62 %63
         %65 = OpIAdd %10 %61 %64
         %66 = OpExtInst %10 %1 SMin %65 %18
         %67 = OpSLessThanEqual %32 %60 %66
               OpBranch %59
         %59 = OpLabel
         %68 = OpPhi %32 %57 %51 %67 %58
               OpBranchConditional %68 %48 %49
         %48 = OpLabel
               OpReturn
         %50 = OpLabel
               OpBranch %47
         %49 = OpLabel
               OpBranch %38
         %38 = OpLabel
         %70 = OpLoad %10 %25
         %71 = OpIMul %10 %62 %70
         %72 = OpLoad %10 %34
         %73 = OpIAdd %10 %72 %71
               OpStore %34 %73
               OpBranch %35
         %37 = OpLabel
               OpBranch %29
         %29 = OpLabel
         %74 = OpLoad %10 %25
         %75 = OpIMul %10 %74 %62
               OpStore %25 %75
               OpBranch %26
         %28 = OpLabel
         %76 = OpAccessChain %19 %16 %17 %17
         %77 = OpLoad %10 %76
         %78 = OpConvertSToF %6 %77
         %79 = OpAccessChain %19 %16 %17 %18
         %80 = OpLoad %10 %79
         %81 = OpConvertSToF %6 %80
         %82 = OpAccessChain %19 %16 %17 %18
         %83 = OpLoad %10 %82
         %84 = OpConvertSToF %6 %83
         %85 = OpAccessChain %19 %16 %17 %17
         %86 = OpLoad %10 %85
         %87 = OpConvertSToF %6 %86
         %88 = OpCompositeConstruct %7 %78 %81 %84 %87
               OpStore %9 %88
               OpReturn
               OpFunctionEnd
