; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 71
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %52
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_int_values"
               OpName %14 ""
               OpName %20 "i"
               OpName %52 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpDecorate %30 RelaxedPrecision
               OpDecorate %52 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 3
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpConstant %6 0
         %16 = OpConstant %6 1
         %17 = OpTypePointer Uniform %6
         %26 = OpTypeBool
         %28 = OpConstant %6 2
         %49 = OpTypeFloat 32
         %50 = OpTypeVector %49 4
         %51 = OpTypePointer Output %50
         %52 = OpVariable %51 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %20 = OpVariable %7 Function
         %18 = OpAccessChain %17 %14 %15 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
               OpStore %20 %15
               OpBranch %21
         %21 = OpLabel
               OpLoopMerge %23 %24 None
               OpBranch %25
         %25 = OpLabel
         %27 = OpLoad %6 %20
         %29 = OpExtInst %6 %1 FindSMsb %16
         %30 = OpExtInst %6 %1 SMin %28 %29
         %31 = OpSLessThanEqual %26 %27 %30
               OpSelectionMerge %33 None
               OpBranchConditional %31 %32 %33
         %32 = OpLabel
         %34 = OpLoad %6 %8
         %35 = OpAccessChain %17 %14 %15 %28
         %36 = OpLoad %6 %35
         %37 = OpSLessThan %26 %34 %36
               OpBranch %33
         %33 = OpLabel
         %38 = OpPhi %26 %31 %25 %37 %32
               OpBranchConditional %38 %22 %23
         %22 = OpLabel
         %39 = OpLoad %6 %8
         %40 = OpIAdd %6 %39 %16
               OpStore %8 %40
               OpBranch %24
         %24 = OpLabel
         %41 = OpLoad %6 %20
         %42 = OpIAdd %6 %41 %16
               OpStore %20 %42
               OpBranch %21
         %23 = OpLabel
         %43 = OpLoad %6 %8
         %44 = OpAccessChain %17 %14 %15 %15
         %45 = OpLoad %6 %44
         %46 = OpIEqual %26 %43 %45
               OpSelectionMerge %48 None
               OpBranchConditional %46 %47 %66
         %47 = OpLabel
         %53 = OpAccessChain %17 %14 %15 %15
         %54 = OpLoad %6 %53
         %55 = OpConvertSToF %49 %54
         %56 = OpAccessChain %17 %14 %15 %16
         %57 = OpLoad %6 %56
         %58 = OpConvertSToF %49 %57
         %59 = OpAccessChain %17 %14 %15 %16
         %60 = OpLoad %6 %59
         %61 = OpConvertSToF %49 %60
         %62 = OpAccessChain %17 %14 %15 %15
         %63 = OpLoad %6 %62
         %64 = OpConvertSToF %49 %63
         %65 = OpCompositeConstruct %50 %55 %58 %61 %64
               OpStore %52 %65
               OpBranch %48
         %66 = OpLabel
         %67 = OpAccessChain %17 %14 %15 %16
         %68 = OpLoad %6 %67
         %69 = OpConvertSToF %49 %68
         %70 = OpCompositeConstruct %50 %69 %69 %69 %69
               OpStore %52 %70
               OpBranch %48
         %48 = OpLabel
               OpReturn
               OpFunctionEnd
