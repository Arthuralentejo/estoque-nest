import { Controller, Get, Post, Body, Patch, Param } from "@nestjs/common";
import { DevicesService } from "./devices.service";
import { CreateDeviceDto } from "./dto/create-device.dto";
import { UpdateDeviceDto } from "./dto/update-device.dto";
import { Device } from "./entities/device.entity";

@Controller("devices")
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) { }

  @Post()
  create(@Body() createDeviceDto: CreateDeviceDto) {
    return this.devicesService.create(createDeviceDto);
  }

  @Get()
  findAll() {
    return this.devicesService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.devicesService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateDeviceDto: UpdateDeviceDto) {
    return this.devicesService.update(+id, updateDeviceDto);
  }
}
