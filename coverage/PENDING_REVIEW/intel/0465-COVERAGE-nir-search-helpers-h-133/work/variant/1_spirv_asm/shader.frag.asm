; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 75
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %50
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "v0"
               OpName %13 "buf1"
               OpMemberName %13 0 "_GLF_uniform_float_values"
               OpName %15 ""
               OpName %24 "v1"
               OpName %50 "_GLF_color"
               OpName %53 "buf0"
               OpMemberName %53 0 "_GLF_uniform_int_values"
               OpName %55 ""
               OpDecorate %12 ArrayStride 16
               OpMemberDecorate %13 0 Offset 0
               OpDecorate %13 Block
               OpDecorate %15 DescriptorSet 0
               OpDecorate %15 Binding 1
               OpDecorate %50 Location 0
               OpDecorate %52 ArrayStride 16
               OpMemberDecorate %53 0 Offset 0
               OpDecorate %53 Block
               OpDecorate %55 DescriptorSet 0
               OpDecorate %55 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 2
          %8 = OpTypePointer Function %7
         %10 = OpTypeInt 32 0
         %11 = OpConstant %10 3
         %12 = OpTypeArray %6 %11
         %13 = OpTypeStruct %12
         %14 = OpTypePointer Uniform %13
         %15 = OpVariable %14 Uniform
         %16 = OpTypeInt 32 1
         %17 = OpConstant %16 0
         %18 = OpConstant %16 2
         %19 = OpTypePointer Uniform %6
         %22 = OpConstant %6 3.79999995
         %26 = OpConstant %6 1
         %29 = OpConstant %6 0
         %30 = OpConstant %16 1
         %42 = OpTypeBool
         %43 = OpTypeVector %42 2
         %48 = OpTypeVector %6 4
         %49 = OpTypePointer Output %48
         %50 = OpVariable %49 Output
         %51 = OpConstant %10 2
         %52 = OpTypeArray %16 %51
         %53 = OpTypeStruct %52
         %54 = OpTypePointer Uniform %53
         %55 = OpVariable %54 Uniform
         %56 = OpTypePointer Uniform %16
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %9 = OpVariable %8 Function
         %24 = OpVariable %8 Function
         %20 = OpAccessChain %19 %15 %17 %18
         %21 = OpLoad %6 %20
         %23 = OpCompositeConstruct %7 %21 %22
               OpStore %9 %23
         %25 = OpLoad %7 %9
         %27 = OpCompositeConstruct %7 %26 %26
         %28 = OpFSub %7 %25 %27
         %31 = OpAccessChain %19 %15 %17 %30
         %32 = OpLoad %6 %31
         %33 = OpCompositeConstruct %7 %29 %29
         %34 = OpCompositeConstruct %7 %32 %32
         %35 = OpExtInst %7 %1 FClamp %28 %33 %34
               OpStore %24 %35
         %36 = OpLoad %7 %24
         %37 = OpAccessChain %19 %15 %17 %17
         %38 = OpLoad %6 %37
         %39 = OpAccessChain %19 %15 %17 %30
         %40 = OpLoad %6 %39
         %41 = OpCompositeConstruct %7 %38 %40
         %44 = OpFOrdEqual %43 %36 %41
         %45 = OpAll %42 %44
               OpSelectionMerge %47 None
               OpBranchConditional %45 %46 %70
         %46 = OpLabel
         %57 = OpAccessChain %56 %55 %17 %17
         %58 = OpLoad %16 %57
         %59 = OpConvertSToF %6 %58
         %60 = OpAccessChain %56 %55 %17 %30
         %61 = OpLoad %16 %60
         %62 = OpConvertSToF %6 %61
         %63 = OpAccessChain %56 %55 %17 %30
         %64 = OpLoad %16 %63
         %65 = OpConvertSToF %6 %64
         %66 = OpAccessChain %56 %55 %17 %17
         %67 = OpLoad %16 %66
         %68 = OpConvertSToF %6 %67
         %69 = OpCompositeConstruct %48 %59 %62 %65 %68
               OpStore %50 %69
               OpBranch %47
         %70 = OpLabel
         %71 = OpAccessChain %56 %55 %17 %30
         %72 = OpLoad %16 %71
         %73 = OpConvertSToF %6 %72
         %74 = OpCompositeConstruct %48 %73 %73 %73 %73
               OpStore %50 %74
               OpBranch %47
         %47 = OpLabel
               OpReturn
               OpFunctionEnd
